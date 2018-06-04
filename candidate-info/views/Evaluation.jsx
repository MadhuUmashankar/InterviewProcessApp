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
       data: []
     };

    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

   }


  handleClose() {
      this.setState({ show: false });
  }

  handleShow() {
      this.setState({ show: true });
  }

  handleSaveChanges(record) {
    console.log('inside parent');
      if(record) {
          let records = this.state.data;
          this.setState({ show: false });
          let newIAForm = records.concat([record]);
          this.setState({ data: newIAForm });
            console.log('data', newIAForm, record)

          axios.post(this.props.url+'/newIAForm', record)
              .catch(err => {
                  console.error(err);
                  this.setState({ data: records });
              });
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
            <Modal.Title>Candidate Evaluation Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
                
                  <div className="margin-small">
                    <Details ref={instance => { this.child = instance; }} onSubmit= {this.handleSaveChanges} />
                  </div>

                  <div className="margin-small">
                    <Note />
                  </div>

                  <div className="margin-small pd-large">
                    <Expertise />
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



            </div>

          </Modal.Body>




          <Modal.Footer>
            <Button onClick={() => { this.child.onSubmit(); }}>SaveChanges</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );

  }
}

export default Evaluation;