import React, { Component } from 'react';
import './Evaluation.scss';
import Details from './Details';
import Note from './Note';
import Expertise from './Expertise';
import Impression from './Impression';
import Summary from './Summary';

class EvaluationForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      candidate: props.candidate
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDetailsData = this.handleDetailsData.bind(this);
  }

  handleSubmit(e) {
       e.preventDefault();
      this.handleDetailsData(details);
  }

  handleDetailsData(details) {

  }

  render () {
  return(
    <div>
      <form onSubmit= {this.handleSubmit}>

            <div className="margin-small">
              <Details candidate={candidate} onDetailsSave= {this.handleDetailsData} />
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
    </div>
  )}
}

export default EvaluationForm;
