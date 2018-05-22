import React, { Component } from 'react';
import CandinateForm from './CandinateForm';
import CandinateInfoList from './CandinateInfoList';

import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadDetailsFromServer = this.loadDetailsFromServer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    loadDetailsFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    handleSubmit(record) {
        let records = this.state.data;
        console.log(this.state.data);
        let newCandinate = records.concat([record]);
        this.setState({ data: newCandinate });
        axios.post(this.props.url+'/newCandinate', record)
            .catch(err => {
                console.error(err);
                this.setState({ data: records });
            });
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


   render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
            <CandinateForm  onHandleSubmit={ this.handleSubmit }/>
            <CandinateInfoList
              onDelete={ this.handleDelete }
              onUpdate={ this.handleUpdate }
              data={ this.state.data }/>   

      </div>
    );
  }
}

export default App;