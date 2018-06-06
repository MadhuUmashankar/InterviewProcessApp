import React from 'react';
import './Summary.scss';

class Summary extends React.Component {
  render() {
    return (
      <div className="container-fluid border">
        <div className="row header">
          <div className="col-sm-12"><label>General impression - to be filled up by the interviewer</label></div>
        </div>

        <div className="row interview-comments">
          <div className="col-sm-4">Interviewers comments regarding the candidate, strong points, weak points</div>
          <div className="col-sm-8"><textarea rows="4" cols="50"></textarea></div>
        </div>
        <div className="row">
          <div className="col-sm-4">Other observations (additional comments regarding candidates attitude, potential)</div>
          <div className="col-sm-8"><textarea rows="4" cols="50"></textarea></div>
        </div>
        <div className="row">
          <div className="col-sm-4">Technical level</div>
          <div className="col-sm-8"><div className="form-group experience-width">
             <select className="form-control" id="experience">
               <option>Select</option>
                 <option>Junior 1</option>
                 <option>Junior 2</option>
                 <option>Junior 3</option>
                 <option>Mid 1</option>
                 <option>Mid 2</option>
                 <option>Mid 3</option>
                 <option>Senior 1</option>
                 <option>Senior 2</option>
                 <option>Senior 3</option>
                 <option>Team Lead 1</option>
                 <option>Team Lead 2</option>
                 <option>Team Lead 3</option>
             </select>
          </div></div>
        </div>
        <div className="row">
          <div className="col-sm-4">On what type of project(s) or role(s) do you think this candidate would fit best?</div>
          <div className="col-sm-8"><textarea rows="2" cols="50"></textarea></div>
        </div>
      </div>
    )
  }
}

export default Summary;
