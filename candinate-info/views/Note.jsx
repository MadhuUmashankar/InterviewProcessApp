import React from 'react';


class Note extends React.Component {
  render(){
    return(
      <div className="container-fluid border">
        <div className="row header">
          <div className="col-sm-6"><label>Experience: 10%</label></div>
          <div className="col-sm-6">
              <div className="form-group">
                 <select className="form-control" id="experience">
                   <option>Select</option>
                     <option>0</option>
                     <option>2</option>
                     <option>4</option>
                     <option>6</option>
                     <option>8</option>
                     <option>10</option>
                 </select>
              </div>
          </div>
        </div>
        <div className="row color">
            <div className="col-sm-12"><label>How to note: </label></div>
        </div>

        <div className="row">
          <div className="col-sm-2">0</div>
          <div className="col-sm-10"><p>He has some theoretical experience, but the candidate has no practical experience</p></div>
        </div>
        <div className="row">
          <div className="col-sm-2">2</div>
          <div className="col-sm-10"><p>He has some practical experience, but he learned in a chaotic mode</p></div>
        </div>
        <div className="row">
          <div className="col-sm-2">4</div>
          <div className="col-sm-10"><p>He has the practical and theoretical knowledge of a junior person, still needs some experience and supervizing</p></div>
        </div>
        <div className="row">
          <div className="col-sm-2">6</div>
          <div className="col-sm-10"><p>He has enough experience to work on tasks on his own without supervizing</p></div>
        </div>
        <div className="row">
          <div className="col-sm-2">8</div>
          <div className="col-sm-10"><p>He has a very solid experience and can take architectural decisions on his own</p></div>
        </div>
        <div className="row">
          <div className="col-sm-2">10</div>
          <div className="col-sm-10"><p>He has a very solid experience and he coordinated projects OR coached some other developers</p></div>
        </div>
      </div>
    )
  }
}

export default Note;
