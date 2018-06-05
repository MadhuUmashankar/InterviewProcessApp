import React, { Component } from 'react';
import './candidateInfoList.scss';
import Evaluation from './Evaluation';

export default class CandidateInfoList extends Component {
    constructor(props) {
        super(props);
        this.modalStatus = false;
    }

    handleDelete(e, candidateID) {
        const {onDelete} = this.props;
        onDelete(candidateID);
    }

    handleUpdate(e, candidateID, candidate) {
        const {handleUpdate} = this.props;
        handleUpdate(candidateID, candidate);
    }

    handleView(e, candidate) {
        const {onModalView} = this.props;
        this.modalStatus = true;
        onModalView(this.modalStatus, candidate);
    }

    handleEvalution(e, candidateID, candidate) {
        window.location.href = "/CandidateAcessment";
    }

   
    render() {
        const {data, searchKey} = this.props;

        let candidateNodes = data;

        if(searchKey) {
            candidateNodes = data.filter((candidate, index) => {
                const fullName = candidate.firstname  + " " +  candidate.lastname;
                return candidate.firstname.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || candidate.lastname.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || candidate.skills.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            })
        }   


        candidateNodes = candidateNodes && candidateNodes.map((candidate, index) => {
            const candidateID = candidate._id;
            return (
                <div  key={index}>
                        <div className="candidate-colum panel">
                            <div>
                                <p>Name: {candidate.firstname} {candidate.lastname}</p>
                                <p>Skills: {candidate.skills}</p>
                            </div>
                            <div className="evaluation-wrapper" >
                                <Evaluation/> 
                                <div className="file"><a href= {candidate.selectedFile_name} download> {candidate.selectedFile_name} </a></div>                            
                            </div>
                              <div>
                                <button className="btn-view" onClick={(e)=>this.handleView(e, candidate)}>View</button>
                                <button className="btn-delete" onClick={(e)=>this.handleDelete(e, candidateID,candidate)}>delete</button>
                            </div>
                            {/* <div>
                                <button className="btn-evaluate btn btn-lg btn-primary"  onClick={this.handleEvalution}>Start Evalution Process</button>
                            </div> */}
                        </div>                    
                </div>                
                
            )
        })

        return (

            <div className="candidate-list">
                {
                    candidateNodes.length > 0
                    && candidateNodes 
                }                                
                { candidateNodes.length === 0 && <p className="no-record">No records available</p>}
            </div>
        )
    }
}