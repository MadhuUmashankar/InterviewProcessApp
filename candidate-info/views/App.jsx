import React, { Component } from 'react';
import CandidateForm from './CandidateForm';
import CandidateInfoList from './CandidateInfoList';
import './App.scss';
import { Modal,Button } from 'react-bootstrap';
import InputBox from './InputBox'


import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [], show: false, searchKey:"", modalLabelView: false, candidate:{} };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.loadDetailsFromServer = this.loadDetailsFromServer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleView = this.handleView.bind(this);       
    }
    loadDetailsFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    handleSubmit(record) {
        if(record) {
            let records = this.state.data;
            this.setState({ show: false });
            let newCandidate = records.concat([record]);
            this.setState({ data: newCandidate });
            axios.post(this.props.url+'/newCandidate', record)
                .catch(err => {
                    console.error(err);
                    this.setState({ data: records });
                });
        }
    }

    handleDelete(id) {
        var {data} = this.state;
        
        data.map((candidate, index) => {
            if(id === candidate._id) {
                data.splice(index,1);
                this.setState({ data });
            }      
        })
        axios.delete(`${this.props.url}/${id}`)
            .then(res => {                
                console.log('Record deleted');
            })
            .catch(err => {
                console.error(err);
            });
    }

    handleView(status, candidate) {        
        var { modalLabelView } = this.state;
        this.setState({ show: status, modalLabelView: true, candidate });
    }

    handleUpdate(id, record) {
        this.setState({ show: false });
        console.log(record);
        //sends the new candidate id and new candidate to our api
        axios.put(`${this.props.url}/${id}`, record)
            .catch(err => {
                console.log(err);
            })
    }
    componentDidMount() {
        this.loadDetailsFromServer();
        setInterval(this.loadTodosFromServer, this.props.pollInterval);
    }

 
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true, modalLabelView:false });
    }

    handleSearch(e) {
        this.setState({searchKey:e.target.value})
    }
    

   render() {
    const {data, searchKey, candidate, modalLabelView } = this.state;

    return (
      <div className="App">
        <div className="App-header">
            <div className="">
                <h1> Candidate Details </h1> 
            </div>
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    Add New Candidate
                </Button>
            </div>
        </div>
        <div className="search-container">
            <label className="control-label">Candidate Search:</label>  
            <InputBox
                type="text"
                placeholder="Search..."
                classname="form-control"
                onChange={this.handleSearch}
            />
        </div>
            

        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Candidate Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CandidateForm  onHandleSubmit={ this.handleSubmit } candidate={candidate} modalLabelView={modalLabelView} handleUpdate={ this.handleUpdate }/>
            </Modal.Body>
        </Modal>


        <CandidateInfoList
            onDelete={ this.handleDelete }
            onModalView={this.handleView }            
            data={ data }
            searchKey= { searchKey }/>
      </div>
    );
  }
}

export default App;