import React from "react";
import './CandinateForm.scss';
import InputBox from './InputBox'

export default class CandinateForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            skills : '',
            email: '', 
            phone: '',
            city: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnChange(event) {
        switch (event.target.name) {
            case "firstname":
                this.setState({firstname : event.target.value})
                break;
            case "lastname":
                this.setState({lastname : event.target.value})
                break;
            case "email":
                this.setState({email : event.target.value})
                break;
            case "phone":
                this.setState({phone : event.target.value})
                break;
            case "city":
                this.setState({city : event.target.value})
                break;
            case "skills":
                this.setState({skills : event.target.value})
                break;
        
            default:
                break;
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const {firstname, lastname, skills, email, phone, city} = this.state;
        const {onHandleSubmit} = this.props;

        if (!firstname || !lastname || !skills || !email || !phone || !city) {
            return;
        }
        onHandleSubmit({ firstname, lastname, skills, email, phone, city});
    }


    render(){
        return(        
        
            
            <div className="form-container">
                    <form className="form-horizontal" id="contact_form" onSubmit={ this.handleSubmit }>
                        <fieldset className = "background">
                            <div className="form-group">
                                <label className="col-md-4 control-label">First Name</label>  
                                <div className="col-md-6 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <InputBox
                                            type="text"
                                            placeholder="First Name"
                                            classname="form-control"
                                            name="firstname"
                                            value = {this.state.firstname}
                                            autoFocus="true"
                                            required
                                            onChange = {this.handleOnChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-4 control-label" >Last Name</label> 
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <InputBox
                                                type="text"
                                                placeholder="Last Name"
                                                classname="form-control"
                                                name="lastname"
                                                value = {this.state.lastname}
                                                required
                                                onChange = {this.handleOnChange}
                                            />
                                         </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label className="col-md-4 control-label">E-Mail</label>  
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                            <InputBox
                                                type="email"
                                                placeholder="E-Mail Address"
                                                classname="form-control"
                                                name="email"
                                                value = {this.state.email}
                                                required
                                                onChange = {this.handleOnChange}
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-4 control-label">Phone #</label>  
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                            <InputBox
                                                type="text"
                                                placeholder="(91)12345-67890"
                                                classname="form-control"
                                                name="phone"
                                                value = {this.state.phone}
                                                onChange = {this.handleOnChange}
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-4 control-label">City</label>  
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                            <InputBox
                                                type="text"
                                                placeholder="city"
                                                classname="form-control"
                                                name="city"
                                                value = {this.state.city}
                                                required
                                                onChange = {this.handleOnChange}
                                            />
                                        </div>
                                    </div>
                            </div>

                              <div className="form-group">
                                <label className="col-md-4 control-label">Key Skills</label>  
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                            <InputBox
                                                type="text"
                                                placeholder="key skills"
                                                classname="form-control"
                                                name="skills"
                                                value = {this.state.skills}
                                                required
                                                onChange = {this.handleOnChange}
                                            />
                                        </div>
                                    </div>
                            </div>

                            
                            <div className="form-group">
                                <label className="col-md-4 control-label">Upload Resume</label>
                                <div className="col-md-6 inputGroupContainer">
                                    <div className="input-group">
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                                    </div>
                                </div>    
                            </div>


                            <div className="form-group">
                                <label className="col-md-4 control-label"></label>
                                    <div className="col-md-6">
                                        <button className="btn btn-info">Submit<span className="glyphicon glyphicon-send"></span></button>
                                     </div>
                            </div>

                        </fieldset>
                    </form>
            </div> 
        
        )
    }
}

