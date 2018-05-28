import React, { Component } from 'react';
import './CandinateInfoList.scss';
import CandinateForm from './CandinateForm';
import Evaluation from './Evaluation';

export default class candinateInfoList extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete(e, candinateID) {
        const {onDelete} = this.props;
        onDelete(candinateID);
    }

    handleUpdate(e, candinateID, candinate) {
        const {handleUpdate} = this.props;
        handleUpdate(candinateID, candinate);
    }




    render() {
        const {data, searchKey} = this.props;

        const candinateNodes = data.map((candinate, index) => {
            const candinateID = candinate._id;
            return (
                <div  key={index}>
                    {
                        !searchKey &&
                        <div className="candinate-colum panel">
                            <div>
                                <p>Name: {candinate.firstname} {candinate.lastname}</p>
                                <p>Skills: {candinate.skills}</p>
                            </div>
                            <div className="candidate-ia-form">
                                <Evaluation />
                            </div>
                            <div className="status-class">
                              <select className="form-control" id="Jun">
                                <option>Select</option>
                                  <option>Selected</option>
                                  <option>Rejected</option>
                                  <option>On Hold</option>
                                  <option>Move to Technical Round 2</option>
                                  <option>Move to HR Round</option>
                                  <option>Move to Manager Round</option>
                                </select>
                            </div>
                            <div>
                                <button className="btn-update list-modify-btn" onClick={(e)=>this.handleUpdate(e, candinateID)}>Update</button>
                                <button className="btn-delete" onClick={(e)=>this.handleDelete(e, candinateID,candinate)}>delete</button>
                            </div>
                        </div>
                    }

                </div>


            )
        })

        return (

            <div className="candinate-list">
                                {
                                    candinateNodes.length > 0
                                    && candinateNodes
                                }
                                { candinateNodes.length === 0 && "No records available"}
                    </div>
        )
    }
}
