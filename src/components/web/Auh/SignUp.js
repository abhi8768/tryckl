import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {ToastsStore} from 'react-toasts';

import { fetchMasterData } from "../../../actions/web/masterAction";
import { createAccountRequest } from "../../../actions/web/authAction";
import "./login.css"
import { TrendingUpTwoTone } from '@material-ui/icons';

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
            latitude         : '',
            longitude        : '',
            terms_n_condition: 0,
            inactive_btn     : true,
            brokers_id       : this.props.brokers_id,
        }
        this.onSubmit       = this.onSubmit.bind(this);
        this.handleChange   = this.handleChange.bind(this);
        this.success        = this.success.bind(this);
    }

    componentDidMount(){
        
        this.setState({
            first_name       : (localStorage.getItem('first_name')===null || localStorage.getItem('first_name')=== undefined)?'':localStorage.getItem('first_name'),
            last_name        : (localStorage.getItem('last_name')===null || localStorage.getItem('last_name')=== undefined)?'':localStorage.getItem('last_name'),
            user_id          : (localStorage.getItem('mobile_no')===null || localStorage.getItem('mobile_no')=== undefined)?'':localStorage.getItem('mobile_no'),
            email            : (localStorage.getItem('email_id')===null || localStorage.getItem('email_id')=== undefined)?'':localStorage.getItem('email_id'),
            license_number   : (localStorage.getItem('license_number')===null || localStorage.getItem('license_number')=== undefined)?'':localStorage.getItem('license_number'),
            license_number_id: (localStorage.getItem('license_number_id')===null || localStorage.getItem('license_number_id')=== undefined)?'':localStorage.getItem('license_number_id'),
            license_state    : (localStorage.getItem('license_issuing_state_id')===null || localStorage.getItem('license_issuing_state_id')=== undefined)?'':localStorage.getItem('license_issuing_state_id'),
            brokerage        : (localStorage.getItem('brokerage_id')===null || localStorage.getItem('brokerage_id')=== undefined)?'':localStorage.getItem('brokerage_id'),
            terms_n_condition: (localStorage.getItem('terms_n_condition')===null || localStorage.getItem('terms_n_condition')=== undefined)?'':localStorage.getItem('terms_n_condition'),

        });

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
        //console.log('@@ ',nextProps.registeruserdata.status);
        if(nextProps.masterlicensedata != this.props.masterlicensedata && nextProps.masterlicensedata.status == false){
            ToastsStore.error(nextProps.masterlicensedata.message);
            this.setState({
                license_number      : '',
                license_number_id   : nextProps.masterlicensedata.masterlicense.id
            });
        }
        else if(nextProps.masterlicensedata != this.props.masterlicensedata && nextProps.masterlicensedata.status == true){
            console.log('id :: ', nextProps.masterlicensedata.masterlicense[0].id);
            this.setState({
                license_number_id   : nextProps.masterlicensedata.masterlicense[0].id
            });
        }
        else if(nextProps.registeruserdata != this.props.registeruserdata && nextProps.registeruserdata.status === false){
            ToastsStore.error(nextProps.registeruserdata.message);

        }
        else if(nextProps.registeruserdata != this.props.registeruserdata && nextProps.registeruserdata.status === true){
            console.log('Sign up complete');
            let otp_data = nextProps.registeruserdata.registeruser;
            otp_data.user_id = this.state.user_id;
            otp_data.email_id = this.state.email;
            this.props.openOtpBox(otp_data);
        }
        else{
            this.setState({
                master_state     : nextProps.masterstatedata,
                master_brokerage : nextProps.masterbrokeragedata,
            })
           
        }
       
    }

    
      
    success(pos) {
        var crd = pos.coords;

        let param = {
            first_name                : this.state.first_name,
            last_name                 : this.state.last_name,
            mobile_no                 : this.state.user_id,
            email_id                  : this.state.email,
            license_number_id         : this.state.license_number_id,
            password                  : this.state.password,
            license_issuing_state_id  : this.state.license_state,
            brokerage_id              : this.state.brokerage,
            latitude                  : crd.latitude,
            longitude                 : crd.longitude,
            brokers_id                : this.state.brokers_id
        }
        console.log(param);
        localStorage.setItem('first_name', this.state.first_name);
        localStorage.setItem('last_name', this.state.last_name);
        localStorage.setItem('mobile_no', this.state.user_id);
        localStorage.setItem('email_id', this.state.email);
        localStorage.setItem('license_number', this.state.license_number);
        localStorage.setItem('license_number_id', this.state.license_number_id);
        localStorage.setItem('license_issuing_state_id', this.state.license_state);
        localStorage.setItem('brokerage_id', this.state.brokerage);
        localStorage.setItem('terms_n_condition', this.state.terms_n_condition);

        this.props.createAccountRequest(param);
    }
      
    error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        ToastsStore.error('Please allow your browser geolocation. ');
    }
      
      

    onSubmit(e){
        e.preventDefault();

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        navigator.geolocation.getCurrentPosition(this.success, this.error, options);
    }

    handleChange(e) {
        if(e.target.name == 'first_name'){
            let current_state = this.state.license_state;
            let current_brokerage = this.state.brokerage;
            if(current_state===''){
                let state_arr = this.state.master_state;
                this.setState({
                    license_state: state_arr[0].id,
                });
            }
            if(current_brokerage===''){
                let brokerage_arr = this.state.master_brokerage;
                this.setState({
                    brokerage: brokerage_arr[0].id,
                });
            }
        }

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

        if(e.target.name == 'terms_n_condition'){
            if(this.state.terms_n_condition===1)
            {
                this.setState({
                    [e.target.name]: 0,
                },function(){
                    this.activeSubmitBtn();
                });
            }   
            else{
                this.setState({
                    [e.target.name]: 1,
                },function(){
                    this.activeSubmitBtn();
                });
            } 
        }else{
            this.setState({
                [e.target.name]: e.target.value,
            },function(){
                this.activeSubmitBtn();
            });
        }
        
    }

    activeSubmitBtn(){
        //console.log(this.state.terms_n_condition);
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
                //console.log('HEllo');
                this.setState({
                    inactive_btn : false
                })
            }else{
                this.setState({
                    inactive_btn : true
                })
            }

            //console.log('==>> ', this.state.inactive_btn);
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
                            <input type="text" placeholder="Enter your First Name"  name="first_name" id="first_name" onChange={this.handleChange} required value={this.state.first_name} />
                    
                            <label>LAST NAME</label>
                            <input type="text" placeholder="Enter your Last Name" name="last_name" id="last_name" onChange={this.handleChange} required value={this.state.last_name} />

                            <label>Password </label>
                            <input type="password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="Enter valid password " name="password" id="password" onChange={this.handleChange} required/>
                            <i className="fa fa-info" aria-hidden="true"></i>
                            <i className="fa fa-eye"></i>

                            <br />
                            <label>CONFIRM PASSWORD</label>
                            <input type="password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="Retype your password" name="confirm_password" id="confirm_password" onChange={this.handleChange} required/>

                            <label>MOBILE NO. (USER ID)</label>
                            <input type="tel" placeholder="Enter your mobile no." value={this.state.user_id} name="user_id" id="user_id" onChange={this.handleChange}  required/>

                            <label>Email</label>
                            <input type="email" placeholder="Enter your email address" name="email" id="email" value={this.state.email} onChange={this.handleChange} required/>

                            {/* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" */}
                            <label>Real estate license #</label>
                            <input type="text" placeholder="Enter Real Estate Lincense number" name="license_number" id="license_number"  onChange={this.handleChange} value={this.state.first_name} required value={this.state.license_number}/>

                            <label>Real estate lic issuing state</label>
                            <select className="custom-select" value={this.state.license_state} name="license_state" id="license_state" onChange={this.handleChange} required>
                                {   (this.state.master_state.length > 0) ?
															
                                    (this.state.master_state).map((listitem,index) => {
                                        return(
                                            // <option key={`state_${index}`} value={listitem.id} selected={(this.state.license_state==listitem.id)?'selected':''}>{listitem.state_code}</option>
                                            <option key={`state_${index}`} value={listitem.id}>{listitem.state_code}</option>
                                        )
                                    })
                                    : null
                                }
                            </select>
                                
                            <label>Brokerage</label>
                            <select className="custom-select" value={this.state.brokerage} name="brokerage" id="brokerage" onChange={this.handleChange} required>
                                
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
                                <input type="checkbox" name="terms_n_condition" id="terms_n_condition" onChange={this.handleChange} 
                                checked={(this.state.terms_n_condition==1)?'checked':''} />
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
      registeruserdata     : state.signup,
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
