import React from 'react';

class Summary extends React.Component {
  render() {
    return (
      <div className="container-fluid border ">
        <div className="row header">
          <div className="col-sm-12"><label>General impression - to be filled up by the interviewer</label></div>
        </div>

        <div className="row">
          <div className="col-sm-4">Interviewers comments regarding the candidate, strong points, weak points</div>
          <div className="col-sm-8"><p>He is quite good in NodeJS/JAvascript.
          The only down side I see is that he is not hands on in HTML/CSS since he hasnt coded using them for the last 3 years.
          But, I am confident that he would be able to handle himself.
           He is competent enough to handle any NodeJS/JS tasks/projects on his own.</p></div>
        </div>
        <div className="row">
          <div className="col-sm-4">Other observations (additional comments regarding candidates attitude, potential)</div>
          <div className="col-sm-8"><p></p></div>
        </div>
        <div className="row">
          <div className="col-sm-4">Technical level</div>
          <div className="col-sm-8"><div className="form-group">
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
          <div className="col-sm-8"><p>Would recommend to hire.</p></div>
        </div>
      </div>
    )
  }
}

export default Summary;
