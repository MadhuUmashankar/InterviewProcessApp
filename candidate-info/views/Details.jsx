import React from 'react';
import InputBox from './InputBox'
import './Details.scss'

class Details extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        candidateName: '',
        interviewDate: '',
        interviewerName: ''
      };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
      switch (event.target.name) {
          case "candidateName":
              this.setState({candidateName : event.target.value})
              break;
          case "interviewDate":
              this.setState({interviewDate : event.target.value})
              break;
          case "interviewerName":
              this.setState({interviewerName : event.target.value})
              break;

          default:
              break;
      }

      this.onDetailsSave(event);
  }

  onDetailsSave(e) {
    e.preventDefault();
    const {candidateName, interviewDate, interviewerName} = this.state;
    const {onDetailsSave} = this.props;

    if (!candidateName || !interviewDate || !interviewerName) {
        return;
    }
    onDetailsSave({candidateName, interviewDate, interviewerName});

  }



  render(){
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
                        value = {this.state.candidateName}
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
