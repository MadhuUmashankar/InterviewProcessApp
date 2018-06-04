import React from 'react';
import NewRow from './NewRow'

class Expertise extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        rows: [],
        value: true,
        currentIndex:''
  }
}

  addNewRow(i) {
    var arr  = this.state.rows;
     arr.push(i);
     this.setState({rows: arr});
  }

  eachRow(i) {
    return <NewRow />
  }

  handleDelete(indexDelete, event) {
      const rows = [...this.state.rows];
      rows.splice(indexDelete, 1);
      this.setState({ rows});
  }

  handleAddNewRound(newRound) {
     let rounds = this.state.nextRound;
     console.log('add new round', this.state.nextRound);
     let newTechnicalRound = rounds.concat([round]);
     this.setState({ nextRound: newTechnicalRound });
     // axios.post(this.props.url+'/newTechnicalRound', round)
     //     .catch(err => {
     //         console.error(err);
     //         this.setState({ nextRound: rounds });
     //     });
   }

  render(){

    return(
      <div>
          <div className="container-fluid border">
            <div className="row header">
            <button className="col-sm-1" title="Add Next round of Technical Interview" onClick={ (e) => this.handleAddNewRound(e)}>
              <span className="glyphicon glyphicon-plus"></span>
            </button>

                <div className="col-sm-5"><label>Technical Interview: 80%</label>
                </div>
                  <div className="col-sm-6">
                      <label>Calculated Score</label>
                  </div>
                </div>
            </div>
              <table>
                  <tbody>
                      <tr>
                        <th className="col-sm-6">Area of Expertise</th>
                        <th className="col-sm-4">
                          <select className="form-control" id="Jun">
                            <option>Select</option>
                              <option>Junior Minimum</option>
                              <option>Mid Minimum</option>
                              <option>Senior Minimum</option>
                            </select></th>
                        <th className="col-sm-4">Score</th></tr>
                      <tr>
                        <td className="col-sm-6" id="expertisedArea"> {this.state.rows.map(this.eachRow)}</td>
                        <td className="col-sm-4" id="jobSelect"> {this.state.rows.map(this.eachRow)}</td>
                        <td className="col-sm-4" id="Score"> {this.state.rows.map(this.eachRow)}</td>
                      </tr>
                  </tbody>
              </table>
            <button className="btn btn-primary pull-left margin-tiny" onClick={(i)=>this.addNewRow(i)}>Add new row</button>
            <button className="btn btn-teritiary pull-left margin-tiny" onClick={()=>{ this.handleDelete()} }>Remove a row </button>

      </div>
    )
  }
}

export default Expertise;
