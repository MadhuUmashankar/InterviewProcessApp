import React from 'react';
import InputBox from './InputBox';
import './Expertise.scss';

class Expertise extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        rows: [{}]
  };
  this.handleInputChange = this.handleInputChange.bind(this) ;
  this.handleAddRow = this.handleAddRow.bind(this);
  this.handleRemoveRow = this.handleRemoveRow.bind(this);
}

 handleInputChange(event, idx) {
  var abc = function(event) {
      const { name, value } = event.target;
      let rows = [...this.state.rows];

    rows[idx] = Object.assign({}, rows[idx], {[name]: value})

    this.setState({
        rows
      });

    }.bind(this);
      this.onExpertiseSave(event);
    return abc(event);

  };

  handleAddRow () {
    const item = {};
    this.setState({
      rows: [...this.state.rows, item]
    });
  };

  handleRemoveRow () {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };

  onExpertiseSave(e) {
    e.preventDefault();
    const {rows} = this.state;
    const {onExpertiseSave} = this.props;

    if (!rows) {
        return;
    }
    onExpertiseSave(e, {rows});
  }

  render(){
    return (
      <div>
        <div className="container-fluid border">
          <div className="row clearfix header">
          <div className="col-sm-5"><label>Technical Interview: 80%</label></div>

                  <div className="col-sm-6">
                      <label>Calculated Score</label>
                  </div>
            </div>
            <div>
              <table
                className="table table-bordered table-hover expertised-area"
                id="tab_logic">
                <thead>
                  <tr>
                      <th className="col-sm-2 text-center">Area of Expertise</th>
                      <th className="col-sm-2 text-center">Junior Minimum</th>
                      <th className="col-sm-2 text-center">Mid Minimum</th>
                      <th className="col-sm-2 text-center">Senior Minimum</th>
                      <th className="col-sm-2 text-center">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>
                      <InputBox
                          type="text"
                          classname="form-control"
                          name="expertisedArea"
                          id="candidateExpertiseId"
                          value={this.state.rows[idx].expertisedArea}
                          autoFocus="true"
                          maxLength="10"
                          onChange = {(e)=>this.handleInputChange(e,idx)}
                      />
                      </td>
                      <td>
                      <InputBox
                          type="number"
                          classname="form-control"
                          name="juniorMinimumScore"
                          id="juniorMinimumScoreId"
                          value={this.state.rows[idx].juniorMinimumScore}
                          onChange = {(e)=>this.handleInputChange(e,idx)}
                      />
                      </td>
                      <td>
                      <InputBox
                          type="number"
                          classname="form-control"
                          name="midMinimumScore"
                          id="midMinimumScoreId"
                          value={this.state.rows[idx].midMinimumScore}
                          onChange = {(e)=>this.handleInputChange(e,idx)}
                      />

                      </td>
                      <td>
                      <InputBox
                          type="number"
                          classname="form-control"
                          name="seniorMinimumScore"
                          id="seniorMinimumScoreId"
                          value={this.state.rows[idx].seniorMinimumScore}
                          onChange = {(e)=>this.handleInputChange(e,idx)}
                      />

                      </td>
                      <td>
                      <InputBox
                          type="number"
                          classname="form-control"
                          name="avgScore"
                          id="avgScoreId"
                          value={this.state.rows[idx].avgScore}
                          onChange = {(e)=>this.handleInputChange(e,idx)}
                      />

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
              <button onClick={this.handleRemoveRow} className="btn btn-danger float-right">
                Delete Row
              </button>

          </div>
        </div>
      </div>
    );
}

}
export default Expertise;
