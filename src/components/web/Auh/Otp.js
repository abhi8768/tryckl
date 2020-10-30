import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {ToastsStore} from 'react-toasts';
import "./login.css"

class Otp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inactive_btn     : true,
            otpData          : this.props.otpData
        }
    }

    render() {
        let otpData = this.state.otpData;
        return (
                <div className="row">
                    <div className="col-lg-6 justify-content-lg-center m-auto">
                        <div className="veri-wrapper">
                            <h1>VERIFICATION</h1>

                            <h4><img className="" src="assets/img/heading-ico-1.png" />Verify Mobile No.</h4>
                            <div className="content-part-wrapper dark-part text-center">
                                <p className="ver-small-txt">We have sent a CODE to your phone</p>
                                <p className="ver-big-txt">+1 {otpData.user_id}</p>
                                <div className="ver-form">
                                    <input type="password" placeholder="*" className="text-center" maxLength="1" />
                                    <input type="password" placeholder="*" className="text-center" maxLength="1" />
                                    <input type="password" placeholder="*" className="text-center" maxLength="1" />
                                    <input type="password" placeholder="*" className="text-center" maxLength="1" />
                                </div>
                            </div>

                            <h4><img className="" src="assets/img/heading-ico-2.png" />Verify Email</h4>
                            <div className="content-part-wrapper dark-part text-center">
                                <p className="ver-small-txt">We have sent a CODE to your email</p>
                                <p className="ver-big-txt">{otpData.email_id}</p>
                                <div className="ver-form">
                                    <input type="password" placeholder="*" className="text-center" maxLength="1" />
                                    <input type="password" placeholder="*" className="text-center" maxLength="1" />
                                    <input type="password" placeholder="*" className="text-center" maxLength="1" />
                                    <input type="password" placeholder="*" className="text-center" maxLength="1" />
                                </div>
                            </div>
                            <div className="ver-frm-wrapper">
                                <button>NEXT</button>
                                <button className="dis-btn">BACK</button>
                            </div>

                        </div>
                    </div>
                </div>
            
        );
    }
}

export default withRouter(connect(
    
    
  )(Otp));
