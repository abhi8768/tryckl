import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {ToastsStore} from 'react-toasts';
import { registrationVerificationRequest, resendOTPRequest } from "../../../actions/web/authAction";
import "./login.css"

class Otp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inactive_btn     : true,
            otpData          : this.props.otpData,
            mobile_otp1      : '',
            mobile_otp2      : '',
            mobile_otp3      : '',
            mobile_otp4      : '',
            email_otp1       : '',
            email_otp2       : '',
            email_otp3       : '',
            email_otp4       : ''
        }

        this.onSubmit               = this.onSubmit.bind(this);
        this.handleChange           = this.handleChange.bind(this);
        this.backToCreateAccount    = this.backToCreateAccount.bind(this);
    }

    resendOtp(type){
        console.log('type :: ',type);
        let param = {
            brokers_id          : this.state.otpData.brokers_id,
            otp_type            : type,
            verification_type   : 'Registration'
        }
        //console.log('params : ',param);
        this.props.resendOTPRequest(param);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        
    }

    backToCreateAccount(){
        let brokers_id = this.state.otpData.brokers_id;
        let obj = {brokers_id : brokers_id};
        this.props.handleClickSignUpButton(obj);
    }

    onSubmit(e){
        e.preventDefault();
        let mobile_otp = this.state.mobile_otp1+''+this.state.mobile_otp2+''+this.state.mobile_otp3+''+this.state.mobile_otp4;
        let email_otp = this.state.email_otp1+''+this.state.email_otp2+''+this.state.email_otp3+''+this.state.email_otp4;
        //console.log('mobile_otp : ', mobile_otp , ' email_otp : ', email_otp);
        let param = {
            brokers_id          : this.state.otpData.brokers_id,
            mobile_otp          : mobile_otp,
            email_otp           : email_otp,
            verification_type   : "Registration"
        }
        //console.log('params : ',param);
        this.props.registrationVerificationRequest(param);

    }

    UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){
        //console.log('@@ ',nextProps.verifyotpdata.status);
        if(nextProps.verifyotpdata != this.props.verifyotpdata){
            
            if(nextProps.verifyotpdata.status == true){
                //console.log('OTP verified');
                ToastsStore.success(nextProps.verifyotpdata.message);
                this.props.history.push(`/dashboard`);
            }else{
                ToastsStore.error(nextProps.verifyotpdata.message);
                this.setState({
                    mobile_otp1 : "",
                    mobile_otp2 : "",
                    mobile_otp3 : "",
                    mobile_otp4 : "",
                    email_otp1 : "",
                    email_otp2 : "",
                    email_otp3 : "",
                    email_otp4 : "",
                });
             }
        }
        else if(nextProps.resendotpdata != this.props.resendotpdata){
            ToastsStore.success(nextProps.resendotpdata.message);
        }
    }

    render() {
        let otpData = this.state.otpData;
        let mobileNo = otpData.user_id;
        let email_id = otpData.email_id;

        return (
                <div className="row">
                    <div className="col-lg-6 justify-content-lg-center m-auto">
                        <form onSubmit={this.onSubmit}>
                            <div className="veri-wrapper">
                                <h1>VERIFICATION</h1>

                                <h4><img className="" src="assets/img/heading-ico-1.png" />Verify Mobile No.</h4>
                                <div className="content-part-wrapper dark-part text-center">
                                    <p className="ver-small-txt">We have sent a CODE to your phone</p>
                                    <p className="ver-big-txt">+1 {mobileNo.substring(0, 3)}-XXX-XXXX</p>
                                    <div className="ver-form">
                                        <input type="password" placeholder="*" className="text-center" name="mobile_otp1" id="mobile_otp1" onChange={this.handleChange} value={this.state.mobile_otp1} maxLength="1" required />
                                        <input type="password" placeholder="*" className="text-center" name="mobile_otp2" id="mobile_otp2" onChange={this.handleChange} value={this.state.mobile_otp2} maxLength="1" required />
                                        <input type="password" placeholder="*" className="text-center" name="mobile_otp3" id="mobile_otp3" onChange={this.handleChange} value={this.state.mobile_otp3} maxLength="1" required />
                                        <input type="password" placeholder="*" className="text-center" name="mobile_otp4" id="mobile_otp4" onChange={this.handleChange} value={this.state.mobile_otp4} maxLength="1" required />
                                    </div>
                                </div>
                                <div style={{float: "right", cursor : "pointer"}} onClick={this.resendOtp.bind(this,'Mobile')}> <p className="ver-small-txt">Resend OTP</p></div>

                                <h4><img className="" src="assets/img/heading-ico-2.png" />Verify Email</h4>
                                <div className="content-part-wrapper dark-part text-center">
                                    <p className="ver-small-txt">We have sent a CODE to your email</p>
                                    <p className="ver-big-txt">{email_id.substring(0, 2)}XXX@XXXX.XXX</p>
                                    <div className="ver-form">
                                        <input type="password" placeholder="*" className="text-center" name="email_otp1" id="email_otp1" onChange={this.handleChange} value={this.state.email_otp1} maxLength="1" required />
                                        <input type="password" placeholder="*" className="text-center" name="email_otp2" id="email_otp2" onChange={this.handleChange} value={this.state.email_otp2} maxLength="1" required />
                                        <input type="password" placeholder="*" className="text-center" name="email_otp3" id="email_otp3" onChange={this.handleChange} value={this.state.email_otp3} maxLength="1" required />
                                        <input type="password" placeholder="*" className="text-center" name="email_otp4" id="email_otp4" onChange={this.handleChange} value={this.state.email_otp4} maxLength="1" required />
                                    </div>
                                </div>
                                <div style={{float: "right", cursor : "pointer"}} onClick={this.resendOtp.bind(this,'Email')}> <p className="ver-small-txt">Resend OTP</p></div>
                                <div className="ver-frm-wrapper">
                                    <button type="submit">NEXT</button>
                                    <button type="button" onClick={this.backToCreateAccount} className="dis-btn">BACK</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            
        );
    }
}

const mapStateToProps = state => {
    //console.log('state : ',state);
    return {
        verifyotpdata  : state.verifyotp,
        resendotpdata  : state.resendotp,
    }
}

const mapDispatchToProps = dispatch => {
	return {
        registrationVerificationRequest  : bindActionCreators(registrationVerificationRequest , dispatch),
        resendOTPRequest                 : bindActionCreators(resendOTPRequest, dispatch),
	}
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps    
  )(Otp));
