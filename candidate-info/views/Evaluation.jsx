import React, { Component } from 'react';
import './Evaluation.scss';
import Details from './Details';
import Note from './Note';
import Expertise from './Expertise';
import Impression from './Impression';
import Summary from './Summary';
import { Modal,Button } from 'react-bootstrap';
import axios from 'axios';

class Evaluation extends Component {
  constructor(props, context) {
     super(props, context);

     this.state = {
       show: false,
       data: [],
       detailsData: [],
       expertiseData: []

     };

    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    this.loadDetailsFromServerForIASheet = this.loadDetailsFromServerForIASheet.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDetailsData = this.handleDetailsData.bind(this);
    this.handleExpertiseData = this.handleExpertiseData.bind(this);
   }

   loadDetailsFromServerForIASheet() {
       axios.get('/newIAForm')
           .then(res => {
             console.log('response from server', res.data);
               this.setState({ data: res.data });
           })
   }


  handleClose() {
      this.setState({ show: false });
  }

  handleShow() {
      this.setState({ show: true });
  }

  componentDidMount() {
      this.loadDetailsFromServerForIASheet();
      setInterval(this.loadTodosFromServer, this.props.pollInterval);
  }

  handleDetailsData(details) {
    this.handleSaveChanges(details);
  }

  handleExpertiseData(expertise) {
      this.handleSaveChanges(expertise);
  }


  handleSaveChanges(record) {
    console.log('e', event)
    event.preventDefault();
    console.log('inside Evaluation', record);
      if(record) {
          let records = this.state.data;
          this.setState({ show: false });
          let newIAForm = records.concat([record]);
          this.setState({ data: newIAForm });
            console.log('datadfdgdf', newIAForm, record)

          // axios.post('/newIAForm', record)
          //     .catch(err => {
          //         console.error(err);
          //         this.setState({ data: records });
          //     });
      } else {
        return false
      }
  }

  render() {

    return (
      <div>
        <Button bsStyle="primary" onClick={this.handleShow}>
          IA Form
        </Button>

        <Modal bsSize="large" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <h2 className="ia-form-title">Candidate Evaluation Form</h2>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit= {this.handleSaveChanges}>

                  <div className="margin-small">
                    <Details onDetailsSave= {this.handleDetailsData} />
                  </div>

                  <div className="margin-small">
                    <Note />
                  </div>

                  <div className="margin-small">
                    <Expertise onExpertiseSave= {this.handleExpertiseData} />
                  </div>

                  <div className="margin-small">
                    <Impression />
                  </div>

                  <div className="row header col-sm-4 margin-small">
                      <div className="col-sm-4"><label>Total: </label></div>
                      <div className="col-sm-4"><input type="number" /></div>
                  </div>

                  <div className="margin-small">
                    <Summary />
                  </div>



            </form>

          </Modal.Body>

          <Modal.Footer>
            <Button>SaveChanges</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );

  }
}

export default Evaluation;
