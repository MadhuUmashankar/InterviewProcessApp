import React from 'react';
import InputBox from './InputBox'
import './Details.scss'

class Details extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        candidateName: '',
        interviewDate: '',
        interviewerName: '',
        candidate: props.candidate
      };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
      switch (event.target.name) {
          case "candidateName":
              this.setState({candidateName : event.target.value}, () => {
                this.onDetailsSave();
              })
              break;
          case "interviewDate":
              this.setState({interviewDate : event.target.value}, () => {
                this.onDetailsSave();
              })
              break;
          case "interviewerName":
              this.setState({interviewerName : event.target.value}, () => {
                this.onDetailsSave();
              })
              break;
          default:
              break;
      }
    }

  onDetailsSave() {
    const {interviewDate, interviewerName} = this.state;
    const {onDetailsSave} = this.props;

    if (!interviewDate || !interviewerName) {
        return;
    }
    onDetailsSave({interviewDate, interviewerName});
  }



  render(){
    const {candidate} = this.state;

    return(
          <div>
                  <div className="form-group required details-width padding">
                    <label className="control-label" htmlFor="cName">Candidate Name:</label>
                    <InputBox
                        type="text"
                        placeholder="Enter Candidate name"
                        classname="form-control"
                        name="candidateName"
                        id="candidateId"
                        value = {candidate.firstname +" "+ candidate.lastname }
                        autoFocus="true"
                        maxLength="15"
                        required
                        onChange = {this.handleOnChange}
                    />
                  </div>
                  <div className="form-group  required details-width padding">
                    <label className="control-label" htmlFor="iDate">Interview Date:</label>
                    <InputBox
                        type="date"
                        classname="form-control"
                        name="interviewDate"
                        id="interviewDateId"
                        value = {this.state.interviewDate}
                        required
                        onChange = {this.handleOnChange}
                    />

              </div>
                  <div className="form-group required details-width">
                    <label className="control-label" htmlFor="tInt">Interviewer Name</label>
                    <InputBox
                        type="text"
                        placeholder="Enter Interviewer's name"
                        classname="form-control"
                        name="interviewerName"
                        id="interviewerId"
                        value = {this.state.interviewerName}
                        maxLength="20"
                        required
                        onChange = {this.handleOnChange}
                    />

                  </div>
          </div>
    )
  }
}

export default Details;
