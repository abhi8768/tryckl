import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {ToastsStore} from 'react-toasts';

import { fetchMasterData } from "../../../actions/web/masterAction";
import { createAccountRequest } from "../../../actions/web/authAction";
import "./login.css"

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            master_state     : [],
            master_brokerage : [],
            first_name       : '',
            last_name        : '',
            password         : '',
            confirm_password : '',
            user_id          : '',
            email            : '',
            license_number   : '',
            license_number_id: '',
            license_state    : '',
            brokerage        : '',
            terms_n_condition: 0,
            inactive_btn     : true
        }
        this.onSubmit  = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        let param1 = {
            type               : 'STATE',
            search_param       : '',
            logged_in_brokerid : ''
        };
        this.props.fetchMasterData(param1);

        let param2 = {
            type               : 'BROKERAGE',
            search_param       : '',
            logged_in_brokerid : ''
        };
        this.props.fetchMasterData(param2);
    }
    
    UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
        if(nextProps.masterlicensedata != this.props.masterlicensedata && nextProps.masterlicensedata.status == false){
            ToastsStore.error(nextProps.masterlicensedata.message);
            this.setState({
                license_number      : '',
                license_number_id   : nextProps.masterlicensedata.masterlicense.id
            });
        }else{
            this.setState({
                master_state     : nextProps.masterstatedata,
                master_brokerage : nextProps.masterbrokeragedata,
            })
        }
       
    }

    onSubmit(e){
        e.preventDefault();
        
       
        let param = {
            first_name                : this.state.first_name,
            last_name                 : this.state.last_name,
            mobile_no                 : this.state.user_id,
            email_id                  : this.state.email,
            license_number_id         : this.state.license_number_id,
            password                  : this.state.password,
            license_issuing_state_id  : this.state.license_state,
            brokerage_id              : this.state.brokerage,
            brokers_id                : null
        }
        this.props.createAccountRequest(param);
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });

        if(e.target.name == 'license_number'){
            if(e.target.value.length > 7){
                let param = {
                    type               : 'LICENSE',
                    search_param       : e.target.value,
                    logged_in_brokerid : ''
                };
                this.props.fetchMasterData(param);
            }
            
        }
        if((this.state.first_name != '') 
            && (this.state.last_name != '') 
            && (this.state.password != '') 
            && (this.state.confirm_password != '') 
            && (this.state.confirm_password == this.state.password) 
            && (this.state.user_id != '') 
            && (this.state.email != '')
            && (this.state.license_number != '')
            && (this.state.license_state != '')
            && (this.state.brokerage != '')
            && (this.state.terms_n_condition != 0)){
                this.setState({
                    inactive_btn : false
                })
            }
    }

    render() {
        return (
            <div className="form-container sign-up-container reg-frm">
                <form onSubmit={this.onSubmit}>
                    <h1>Create Account</h1>
                                      
                    <Scrollbars style={{ height: "40vh" }}
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={200} 
                    >
                        <div className="frm-wrapper text-left" data-height="40vh" data-scrollable="">
                            <label>FIRST NAME</label>
                            <input type="text" placeholder="Enter your First Name"  name="first_name" id="first_name" onChange={this.handleChange} required/>
                    
                            <label>LAST NAME</label>
                            <input type="text" placeholder="Enter your Last Name" name="last_name" id="last_name" onChange={this.handleChange} required/>

                            <label>Password </label>
                            <input type="password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="Enter valid password " name="password" id="password" onChange={this.handleChange} required/>
                            <i class="fa fa-info" aria-hidden="true"></i>
                            <i class="fa fa-eye"></i>

                            <label>CONFIRM PASSWORD</label>
                            <input type="password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="Retype your password" name="confirm_password" id="confirm_password" onChange={this.handleChange} required/>

                            <label>MOBILE NO. (USER ID)</label>
                            <input type="tel" placeholder="Enter your mobile no." name="user_id" id="user_id" onChange={this.handleChange} required/>

                            <label>Email</label>
                            <input type="email" placeholder="Enter your email address" name="email" id="email" onChange={this.handleChange} required/>

                            <label>Real estate license #</label>
                            <input type="text" placeholder="Enter Real Estate Lincense number" name="license_number" id="license_number" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleChange} required value={this.state.license_number}/>

                            <label>Real estate lic issuing state</label>
                            <select className="custom-select" name="license_state" id="license_state" onChange={this.handleChange} required>
                                {   (this.state.master_state.length > 0) ?
															
                                    (this.state.master_state).map((listitem,index) => {
                                        return(
                                            <option key={`state_${index}`} value={listitem.id}>{listitem.state_code}</option>
                                        )
                                    })
                                    : null
                                }
                            </select>
                                
                            <label>Brokerage</label>
                            <select className="custom-select" name="brokerage" id="brokerage" onChange={this.handleChange} required>
                            {   (this.state.master_brokerage.length > 0) ?
															
                                (this.state.master_brokerage).map((listitem,index) => {
                                    return(
                                        <option key={`brokerage_${index}`} value={listitem.id}>{listitem.name}</option>
                                    )
                                })
                                : null
                            }
                            </select>

                            
                            <label className="container-check float-left"><span>i accept the terms and conditions</span>
                                <input type="checkbox" name="terms_n_condition" id="terms_n_condition" onChange={this.handleChange} value="1"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </Scrollbars>
                    <div className="frm-wrapper">
                        <button type="submit" disabled={(this.state.inactive_btn == true) ? true : false} className={(this.state.inactive_btn == true) ? "inactive_btn" : ''} style={{marginTop : '20px'}}>REGISTER</button>
                    </div>
                </form>
            </div>
        );
    }
}

 const mapStateToProps = state => {
    return {
      masterbrokeragedata  : state.masterbrokerage.masterbrokerage,
      masterstatedata      : state.masterstate.masterstate,
      masterlicensedata    : state.masterlicense,
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
        fetchMasterData  : bindActionCreators(fetchMasterData , dispatch),
        createAccountRequest  : bindActionCreators(createAccountRequest , dispatch),
	}
  }
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp));
