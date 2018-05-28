import React from 'react';
import InputBox from './InputBox'

class NewRow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      expertiseArea: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      expertiseArea: event.target.value
    })
  }
    render () {
      return (
        <div className="form-inline">
          <InputBox
              type="text"
              classname="form-control"
              name="expertiseArea"
              id="candidateId"
              value = {this.state.expertiseArea}
              autoFocus="true"
              maxLength="15"
              onChange = {this.handleInputChange}
          />
        </div>

      )
    }
}


export default NewRow;
