import React, { Component } from 'react';

export default class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
        this.OnHandleChange = this.OnHandleChange.bind(this);
    }

    OnHandleChange(e) {
        const {onChange} = this.props;
        this.setState({value:e.target.value});
        onChange(e);
    }
    
    render() {
        const {type, classname, placeholder, id} = this.props;
        const {value} = this.state;

        return (
            <input type={type} id={id} className={classname} placeholder={placeholder} onChange={this.OnHandleChange} value={value}/>
        );
    }
}