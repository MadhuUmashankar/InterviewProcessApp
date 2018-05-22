import React from "react";
import './CandinateForm.scss';

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
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handlekeySkills = this.handlekeySkills.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstName(event) {
        this.setState({firstname : event.target.value})
    }
    
    handleLastName(event) {
        this.setState({lastname : event.target.value})
    }
    
    handleEmail(event) {
        this.setState({email : event.target.value})
    }

    handlePhone(event) {
        this.setState({phone : event.target.value})
    }

    handleCity(event) {
        this.setState({city : event.target.value})
    }

    handlekeySkills(event) {
        this.setState({skills : event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        const {firstname, lastname, skills, email, phone, city} = this.state;
        const {onHandleSubmit} = this.props;

        if (!firstname || !lastname || !skills || !email || !phone || !city) {
            return;
        }
        onHandleSubmit({ firstname, lastname, skills, email, phone, city});
    }


    render(){
        return(        
        
            
            <div className="container">
                    <form className="form-horizontal" id="contact_form" onSubmit={ this.handleSubmit }>
                        <fieldset className = "background">
                            <div className="form-group">
                                <label className="col-md-4 control-label"><h1>Candidate Form</h1></label>  
                            </div>
                           

                            <div className="form-group">
                                <label className="col-md-4 control-label">First Name</label>  
                                <div className="col-md-4 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input  name="firstname" placeholder="First Name" className="form-control"  type="text" value = {this.state.firstname} 
                                        onChange = {this.handleFirstName} autoFocus="true" required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-4 control-label" >Last Name</label> 
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input name="lastname" placeholder="Last Name" className="form-control"  type="text" value = {this.state.lastname} 
                                                    onChange = {this.handleLastName} required />
                                         </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label className="col-md-4 control-label">E-Mail</label>  
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                            <input name="email" placeholder="E-Mail Address" className="form-control"  type="text" onChange = {this.handleEmail} required />
                                        </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-4 control-label">Phone #</label>  
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                            <input name="phone" placeholder="(91)12345-67890" className="form-control" type="text" onChange = {this.handlePhone}/>
                                        </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-4 control-label">City</label>  
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                            <input name="city" placeholder="city" className="form-control"  type="text" onChange = {this.handleCity}/>
                                        </div>
                                    </div>
                            </div>

                              <div className="form-group">
                                <label className="col-md-4 control-label">Key Skills</label>  
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                            <input name="key skills" placeholder="key skills" className="form-control"  type="text" value = {this.state.skills}
                                            onChange = {this.handlekeySkills} autoFocus="true" required />
                                        </div>
                                    </div>
                            </div>

                            
                            <div className="form-group">
                                <label className="col-md-4 control-label">Upload Resume</label>
                                <div className="col-md-4 inputGroupContainer">
                                    <div className="input-group">
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                                    </div>
                                </div>    
                            </div>


                            <div className="form-group">
                                <label className="col-md-4 control-label"></label>
                                    <div className="col-md-4">
                                        <button className="btn btn-info">Submit<span className="glyphicon glyphicon-send"></span></button>
                                     </div>
                            </div>

                        </fieldset>
                    </form>
            </div> 
        
        )
    }
}

