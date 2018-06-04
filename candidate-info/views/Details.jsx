import React from 'react';
import InputBox from './InputBox'

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
  }

  onSubmit() {
    const {candidateName, interviewDate, interviewerName} = this.state;
    const {onSubmit} = this.props;
    console.log('this.props', this.props)

    if (!candidateName || !interviewDate || !interviewerName) {
        return;
    }
    onSubmit({ candidateName, interviewDate, interviewerName});

  }



  render(){
    return(
          <div>
          <form className="form-inline">
              <div>
                  <div className="form-group pull-left required">
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
                  <div className="form-group align required">
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
              </div>
                  <div className="form-group align-margin required">
                    <label className="control-label" htmlFor="tInt">Technical Interviewers:</label>
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
                  </form>
          </div>
    )
  }
}

export default Details;
