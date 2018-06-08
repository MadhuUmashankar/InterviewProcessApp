import React from "react";
import './CandidateForm.scss';
import InputBox from './InputBox'
import EditButton from './EditButton'

export default class CandidateForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            skills : '',
            email: '',
            phone: '',
            city: '',
            modalLabelView: props.modalLabelView,
            candidate: props.candidate,
            modalEditView: false,
            selectedFile : null,
            selectedFile_name : ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEditView = this.handleEditView.bind(this);
        this.upLoadFile = this.upLoadFile.bind(this);
    }

    handleOnChange(event) {
        const { value } = event.target;
        const {candidate} = this.state;

        switch (event.target.name) {
            case "firstname":
                candidate["firstname"] = value;
                this.setState({firstname : value, candidate})
                break;
            case "lastname":
                candidate["lastname"] = value;
                this.setState({lastname : value})
                break;
            case "email":
                candidate["email"] = value;
                this.setState({email : value})
                break;
            case "phone":
                candidate["phone"] = value;
                this.setState({phone : value})
                break;
            case "city":
                candidate["city"] = value;
                this.setState({city : value})
                break;
            case "skills":
                candidate["skills"] = value;
                this.setState({skills : value})
                break;

            default:
                break;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("In handle Submit");
        console.log(this.state.selectedFile);
        const {firstname, lastname, skills, email, phone, city,selectedFile_name,selectedFile} = this.state;
        const {onHandleSubmit} = this.props;

        if (!firstname || !lastname || !skills || !email || !phone || !city || !selectedFile_name || !selectedFile) {
            return;
        }
        onHandleSubmit({ firstname, lastname, skills, email, phone, city,selectedFile_name,selectedFile});
    }

    handleEditView(modalEditView) {
        const { modalLabelView } = this.state;
        this.setState({modalLabelView:false, modalEditView});
    }

    handleUpdate(e, candidateId,candidate) {
        e.preventDefault();
        const {handleUpdate} = this.props;
        console.log(candidate);
        handleUpdate(candidateId, candidate);
    }

    upLoadFile(event){
        event.preventDefault();
         this.setState({
            selectedFile : event.target.files[0],
            selectedFile_name : event.target.files[0].name
         })
         console.log("UPload file mein");
         console.log(this.state.selectedFile);
        }


    render(){
        const { candidate } = this.state;
        const { modalLabelView, modalEditView } = this.state;

        return(
                <div className="form-container">
                    <form className="form-horizontal" id="contact_form" onSubmit={ this.handleSubmit }>
                        <fieldset className = "background">
                            <div className="form-group">
                                <label className="col-md-4 control-label">First Name</label>
                                <div className="col-md-6 inputGroupContainer">
                                    <div className="input-group">

                                        {!modalLabelView &&
                                            <div>
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <InputBox
                                                type="text"
                                                placeholder="First Name"
                                                classname="form-control"
                                                name="firstname"
                                                value = { modalEditView &&  candidate ? candidate.firstname : this.state.firstname}
                                                autoFocus="true"
                                                required
                                                onChange = {this.handleOnChange}
                                            />
                                            </div>
                                        }
                                        {modalLabelView &&
                                            <div>
                                                <span>:
                                                    <label>
                                                        {candidate && candidate.firstname}
                                                    </label>
                                                </span>
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-4 control-label" >Last Name</label>
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">

                                        {!modalLabelView &&
                                            <div>
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <InputBox
                                                type="text"
                                                placeholder="Last Name"
                                                classname="form-control"
                                                name="lastname"
                                                value = { modalEditView &&  candidate ? candidate.lastname : this.state.lastname}
                                                required
                                                onChange = {this.handleOnChange}
                                            />
                                            </div>
                                        }
                                        {modalLabelView &&
                                            <div>
                                                <span>:
                                                    <label>
                                                        {candidate && candidate.lastname}
                                                    </label>
                                                </span>

                                            </div>
                                        }
                                         </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label className="col-md-4 control-label">E-Mail</label>
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">

                                        {!modalLabelView &&
                                            <div>
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                            <InputBox
                                                type="email"
                                                placeholder="E-Mail Address"
                                                classname="form-control"
                                                name="email"
                                                value = { modalEditView &&  candidate ? candidate.email : this.state.email}
                                                required
                                                onChange = {this.handleOnChange}
                                            />
                                            </div>
                                        }
                                        {modalLabelView &&
                                            <div>
                                                <span>:
                                                    <label>
                                                        {candidate && candidate.email}
                                                    </label>
                                                </span>

                                            </div>
                                        }
                                        </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-4 control-label">Phone</label>
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">

                                        {!modalLabelView &&
                                            <div>
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                            <InputBox
                                                type="tel"
                                                placeholder="(91)12345-67890"
                                                classname="form-control"
                                                name="phone"
                                                maxLength="10"
                                                value = { modalEditView &&  candidate ? candidate.phone : this.state.phone}
                                                onChange = {this.handleOnChange}
                                            />
                                            </div>
                                        }
                                        {modalLabelView &&
                                            <div>
                                                <span>:
                                                    <label>
                                                        {candidate && candidate.phone}
                                                    </label>
                                                </span>

                                            </div>
                                        }
                                        </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-4 control-label">City</label>
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">

                                        {!modalLabelView &&
                                            <div>
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                            <InputBox
                                                type="text"
                                                placeholder="city"
                                                classname="form-control"
                                                name="city"
                                                value = { modalEditView &&  candidate ? candidate.city : this.state.city}
                                                required
                                                onChange = {this.handleOnChange}
                                            />
                                            </div>
                                        }
                                        {modalLabelView &&
                                            <div>
                                                <span>:
                                                    <label>
                                                        {candidate && candidate.city}
                                                    </label>
                                                </span>

                                            </div>
                                        }
                                        </div>
                                    </div>
                            </div>

                              <div className="form-group">
                                <label className="col-md-4 control-label">Key Skills</label>
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">
                                        {!modalLabelView &&
                                            <div>
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                            <InputBox
                                                type="text"
                                                placeholder="key skills"
                                                classname="form-control"
                                                name="skills"
                                                value = { modalEditView &&  candidate ? candidate.skills : this.state.skills}
                                                required
                                                onChange = {this.handleOnChange}
                                            />
                                            </div>
                                        }
                                        {modalLabelView &&
                                            <div>
                                                <span>:
                                                    <label>
                                                        {candidate && candidate.skills}
                                                    </label>
                                                </span>

                                            </div>
                                        }
                                        </div>
                                    </div>
                            </div>

                            {
                                !modalLabelView &&


                                <div className="form-group">
                                    <label className="col-md-4 control-label">Upload Resume</label>
                                    <div className="col-md-6 inputGroupContainer">
                                        <div className="input-group">
                                            <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange = {this.upLoadFile}/>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                modalLabelView &&
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Resume</label>
                                        <div className="col-md-6 inputGroupContainer">
                                            <div className="input-group">

                                            {modalLabelView &&
                                                <div>
                                                    <span>:
                                                        <label>
                                                            <a href="">Resume</a>
                                                        </label>
                                                    </span>

                                                </div>
                                            }
                                            </div>
                                        </div>
                                    </div>
                            }


                            <div className="form-group">
                                <label className="col-md-4 control-label"></label>
                                    <div className="col-md-6">
                                        { !modalLabelView && !modalEditView &&
                                            <button className="btn btn-primary">Submit<span className="glyphicon glyphicon-submit"></span></button>
                                        }
                                        { !modalLabelView && modalEditView &&
                                            <button className="btn btn-primary" onClick={(e) => this.handleUpdate(e, candidate._id, candidate)}>Update<span className="glyphicon glyphicon-update"></span></button>
                                        }
                                        { modalLabelView && !modalEditView &&
                                            <EditButton
                                                handleEditView={this.handleEditView}
                                                title="edit"
                                                classname="btn btn-primary"
                                                value="Edit">
                                            </EditButton>
                                        }
                                    </div>
                            </div>

                        </fieldset>
                    </form>
            </div>

        )
    }
}
