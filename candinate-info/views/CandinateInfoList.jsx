import React, { Component } from 'react';
import './CandinateInfoList.scss';

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
        const {data} = this.props;

        const candinateNodes = data.map((candinate, index) => {
            const candinateID = candinate._id;
            return (
                    <div key={index} className="candinate-colum">
                        <div>
                            <h1>Candinate {index+1}</h1>
                            <p>Name: {candinate.firstname} {candinate.lastname}</p>
                        </div>
                        <div>
                            <button className="btn-update" onClick={(e)=>this.handleUpdate(e, candinateID)}>Update</button>
                            <button className="btn-delete" onClick={(e)=>this.handleDelete(e, candinateID,candinate)}>delete</button>
                        </div>
                    </div>
                
            )
        })

        return (

            <div className="panel">
                <h1> Candinate Information </h1>
                    <div className="panel">
                                {
                                    candinateNodes.length > 0
                                    && candinateNodes 
                                }                                
                                { candinateNodes.length === 0 && "No records available"}
                    </div>
            </div>
        )
    }
}