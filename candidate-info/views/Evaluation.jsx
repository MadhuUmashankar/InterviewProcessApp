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
       detailsData: {},
       experience:{},
       expertiseData: {},
       impression:{},
       summaryData:{},
       candidate:props.candidate,
       url: props.url,
       index:props.index
     };

    this.handleSubmitIAForm = this.handleSubmitIAForm.bind(this);
    this.loadDetailsFromServerForIASheet = this.loadDetailsFromServerForIASheet.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDetailsData = this.handleDetailsData.bind(this);
    this.handleNoteData = this.handleNoteData.bind(this);
    this.handleImpressionSave = this.handleImpressionSave.bind(this);
    this.handleExpertiseData = this.handleExpertiseData.bind(this);
    this.handleSummaryData = this.handleSummaryData.bind(this);
   }

   loadDetailsFromServerForIASheet() {
     let iaUrl = this.state.url + '/newIAForm';
       axios.get(iaUrl)
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
  }

  handleDetailsData(details) {
    this.setState({detailsData: details});
  }

  handleNoteData(experience) {
    this.setState({experience});
  }

  handleExpertiseData(expertise) {
    this.setState({expertiseData: expertise});
  }

  handleImpressionSave(impression) {
      this.setState({impression});
  }

  handleSummaryData(summary) {
    this.setState({summaryData: summary});
  }

  handleUpdate(e, id, record) {
    e.preventDefault();
    const {detailsData, candidate, experience, expertiseData, impression, summaryData} = this.state;
    const fullname = candidate.firstname + " " + candidate.lastname;
    const updatedrecord = Object.assign({}, detailsData, {candidateName: fullname}, {experience},{rows: expertiseData}, {impression}, {summaryData})

    let iaUrl = this.props.url + '/newIAForm';
    this.setState({ show: false });

      //sends the new candidate id and new candidate to our api
      axios.put(`${iaUrl}/${id}`, updatedrecord)
          .catch(err => {
              console.log(err);
          })
    this.loadDetailsFromServerForIASheet();
  }


  handleSubmitIAForm(e) {
    e.preventDefault();
    const {detailsData, candidate, experience, expertiseData, impression, summaryData} = this.state;
    // Candidate IA Form data
    const fullname = candidate.firstname + " " + candidate.lastname;
    const record = Object.assign({}, detailsData, {candidateName: fullname}, {experience},{rows: expertiseData}, {impression}, {summaryData})
    this.setState({ show: false });
      if(record) {
          let records = this.state.data;
          let newIAForm = records.concat(record);
          this.setState({ data: newIAForm });

          axios.post(this.props.url + '/newIAForm', record)
              .catch(err => {
                  console.error(err);
                  this.setState({ data: records });
              });
      }
    this.loadDetailsFromServerForIASheet();
  }

  render() {
    let {candidate, url, data, index} = this.state;
    return (
      <div>
        <Button bsStyle="primary" onClick={()=>{this.handleShow()}}>
          IA Form
        </Button>

        <Modal bsSize="large" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <h2 className="ia-form-title">Candidate Evaluation Form</h2>
          </Modal.Header>
          <Modal.Body>

            <form  onSubmit= {this.handleSubmitIAForm}>
                  <div className="margin-small">
                    <Details onDetailsSave= {this.handleDetailsData} candidate={candidate} data={data[index]} />

                  </div>
                  <div className="margin-small">
                   <Note onNoteSave= {this.handleNoteData} candidate={candidate} data={data[index]} />
                 </div>
                 <div className="margin-small">
                   <Expertise onExpertiseSave= {this.handleExpertiseData} candidate={candidate} data={data[index]} />
                 </div>
                 <div className="margin-small">
                    <Impression onImpressionSave= {this.handleImpressionSave} candidate={candidate} data={data[index]} />
                  </div>

                  <div className="margin-small">
                    <div className="col-sm-4 total">
                      <label className="experience-label">Total: </label>
                      <input type="number" />
                    </div>

                    <Summary onSummarySave= {this.handleSummaryData} candidate={candidate} data={data[index]} />
                      </div>
                    <Button className="move-right" type="submit">Save</Button>
                    <Button className="move-right" onClick={(e)=>{this.handleUpdate(e, data[index]._id, data)}}>Update</Button>
                    <Button onClick={this.handleClose}>Close</Button>

            </form>

          </Modal.Body>


        </Modal>
      </div>
    );

  }
}

export default Evaluation;
