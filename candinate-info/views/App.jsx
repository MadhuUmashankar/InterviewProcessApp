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
        this.state = { data: [], show: false, searchKey:"" };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.loadDetailsFromServer = this.loadDetailsFromServer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);        
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
            let newCandinate = records.concat([record]);
            this.setState({ data: newCandinate });
            axios.post(this.props.url+'/newCandidate', record)
                .catch(err => {
                    console.error(err);
                    this.setState({ data: records });
                });
        }
    }

    handleDelete(id) {
        var {data} = this.state;
        
        data.map((candinate, index) => {
            if(id === candinate._id) {
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
    handleUpdate(id, record) {
        //sends the new candinate id and new candinate to our api
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
        this.setState({ show: true });
    }

    handleSearch(e) {
        this.setState({searchKey:e.target.value})
    }
    

   render() {
    const {data, searchKey} = this.state;

    return (
      <div className="App">
        <div className="App-header">
            <div className="">
                <h1> Candinate Details </h1> 
            </div>
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    Add New Candidate
                </Button>
            </div>
        </div>
        <div className="search-container">
            <label className="control-label">Candinate Search:</label>  
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
                <CandidateForm  onHandleSubmit={ this.handleSubmit }/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>


        <CandidateInfoList
            onDelete={ this.handleDelete }
            onUpdate={ this.handleUpdate }
            data={ data }
            searchKey= { searchKey }/>
      </div>
    );
  }
}

export default App;