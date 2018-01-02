import React, { Component } from 'react';


class UserRegistration extends Component {

    constructor(props) {
        super(props);
        this.state = {addClass: false}
      }
       
    checkPassword(){
        console.log(this.state.addClass)
        this.setState({addClass: !this.state.addClass});
        if (this.refs.password.value === this.refs.confirmPassword.value){
        
        }else{
        
        }
    }    

    // checkDate() {
    //     if (this.refs.dob.value == '') {
    //         .addClass('invalid')
    //   } else {
    //     $('#dob').removeClass('invalid')
    //   }
    // }

    onSubmit(e) {
        console.log(this.refs.first_name.value);
        checkDate();
        e.preventDefault();
    }
    render() {
        let dobClass = ["validate"];
        return (
            <div className="container">
                <h3>Create a New Account</h3>
                <form id='formValidate' onSubmit={this.onSubmit.bind(this)}>
                    <div className="row">
                        <div className="col">
                            <i className="fa fa-user-o fa-2x"></i>
                        </div>
                        <div className="input-field col s3">
                            <input id="first_name" type="text" ref="first_name" className="validate" maxLength="35" required aria-required="true" />
                            <label htmlFor="first_name" className="black-text">First Name</label>
                        </div>
                        <div className="input-field col s3">
                            <input id="middle_name" type="text" ref="middle_name" className="validate" maxLength="35" />
                            <label htmlFor="middle_name" className="black-text">Middle Name</label>
                        </div>
                        <div className="input-field col s3">
                            <input id="last_name" type="text" ref="last_name" className="validate" maxLength="35" required aria-required="true" />
                            <label htmlFor="last_name" className="black-text">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <i className="fa fa-birthday-cake fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="input-field col s3">
                            <input type="text" id="dob" ref="dob" className="datepicker {}" required aria-required="true" />
                            <label htmlFor="dob" className="black-text">Birthday</label>
                        </div>
                        <div className="col">
                            <i className="fa fa-handshake-o fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="input-field col s3">
                            <input type="text" id="joiningDate" ref="joiningDate" className="datepicker" required aria-required="true" />
                            <label htmlFor="joiningDate" className="black-text" >Joining Date</label>
                        </div>
                        <div className="col s3">
                            <input className="with-gap" name="gender" ref="gender" type="radio" id="m" value="m" defaultChecked="true" />
                            <label htmlFor="m" className="black-text"><i className="fa fa-male fa-2x" aria-hidden="true"></i></label>
                            <input className="with-gap" name="gender" ref="gender" type="radio" id="f" value="f" />
                            <label htmlFor="f" className="black-text"><i className="fa fa-female fa-2x" aria-hidden="true"></i></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <i className="fa fa-telegram fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="input-field col s3">
                            <input id="email" type="email" ref="email" className="validate" required aria-required="true" />
                            <label htmlFor="email" className="black-text">Email</label>
                        </div>
                        <div className="col">
                            <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="input-field col s3">
                            <input id="mobile" type="text" ref="mobile" maxLength="10" className="validate" required aria-required="true" />
                            <label htmlFor="mobile" className="black-text">Mobile</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <i className="fa fa-key fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="input-field col s3">
                            <input id="password" type="password" ref="password" className="validate" required aria-required="true" />
                            <label htmlFor="password" className="black-text">Please enter your Password</label>
                        </div>
                        <div className="col"></div>
                        <div className="input-field col s3">
                            <input id="confirmPassword" type="password" ref="confirmPassword" onBlur = {this.checkPassword.bind(this)} className={passwordClass.join(' ')} required aria-required="true" />
                            <label htmlFor="confirmPassword" className="black-text">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="checkbox" id="auth" ref="auth" className="validate" required />
                            <label htmlFor="auth" className="black-text">I agree to the <a className="waves-effect waves-light  modal-trigger" href="#modal1">Terms and Conditions.</a></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit<i className="fa fa-paper-plane"></i></button>
                        </div>
                    </div>
                </form>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Terms and Condition</h4>
                        <ul>
                            <li>I hereby acknowledge that I have read and understood the terms and conditions</li>
                        </ul>
                    </div>
                </div>
            </div>            
        )
    }
}
export default UserRegistration;