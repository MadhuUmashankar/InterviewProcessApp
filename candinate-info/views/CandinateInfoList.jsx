import React, { Component } from 'react';
import './CandinateInfoList.scss';
import CandinateForm from './CandinateForm';

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

        let candinateNodes = data;

        if(searchKey) {
            candinateNodes = data.filter((candinate, index) => {
                return candinate.firstname.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || candinate.lastname.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            })
        }   


        candinateNodes = candinateNodes && candinateNodes.map((candinate, index) => {
            const candinateID = candinate._id;
            return (
                <div  key={index}>
                        <div className="candinate-colum panel">
                            <div>
                                <p>Name: {candinate.firstname} {candinate.lastname}</p>
                                <p>Skills: {candinate.skills}</p>
                            </div>
                            <div>
                                <button className="btn-update" onClick={(e)=>this.handleUpdate(e, candinateID)}>Update</button>
                                <button className="btn-delete" onClick={(e)=>this.handleDelete(e, candinateID,candinate)}>delete</button>
                            </div>
                        </div>                    
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