// import React, { Component } from 'react';
//
// class EvaluationStatus extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       interviewStatus:''
//       candidate: props.candidate,
//       data:props.data,
//       IAdata:props.data || {}
//     }
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleDetailsData = this.handleDetailsData.bind(this);
//   }
//
//   handleOnChange(event) {
//       switch (event.target.name) {
//           case "interviewStatus":
//               this.setState({interviewStatus : event.target.value}, () => {
//                 this.onEvaluationStatusSave();
//               })
//               break;
//           default:
//               break;
//       }
//     }
//
//     onEvaluationStatusSave() {
//       const {interviewStatus} = this.state;
//       const {onEvaluationStatusSave} = this.props;
//
//       onEvaluationStatusSave({interviewStatus});
//     }
//
//   render () {
//     const {data, IAdata} = this.state;
//   return(
//     <div className="row">
//       <div className="col-sm-4"><label>Interview Status</label><<span className="mandatory">*</span>/div>
//       <div className="col-sm-8"><div className="form-group experience-width">
//          <select required className="form-control" onChange = {this.handleOnChange} name="interviewStatus"
//          id="interviewStatusId" value ={data ? data.interviewStatus : this.state.interviewStatus}>
//            <option>Select</option>
//              <option>Junior 1</option>
//              <option>Junior 2</option>
//              <option>Junior 3</option>
//              <option>Mid 1</option>
//              <option>Mid 2</option>
//              <option>Mid 3</option>
//              <option>Senior 1</option>
//              <option>Senior 2</option>
//              <option>Senior 3</option>
//              <option>Team Lead 1</option>
//              <option>Team Lead 2</option>
//              <option>Team Lead 3</option>
//          </select>
//       </div></div>
//   )}
// }
//
// export default EvaluationStatus;
