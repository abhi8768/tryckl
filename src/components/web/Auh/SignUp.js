import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

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
            other_brokerage_name : '',
            latitude         : '',
            longitude        : '',
            age              : 0,
            licensed_agent   : 0,
            authorized_in_usa: 0,
            terms_n_condition: 0,
            terms_stripe     : 0,
            inactive_btn     : true,
            brokers_id       : this.props.brokers_id,
            userNotverified  : this.props.userNotverified
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
                other_brokerage_name : (localStorage.getItem('other_brokerage_name')===null || localStorage.getItem('other_brokerage_name')=== undefined)?'':localStorage.getItem('other_brokerage_name'),
                age              : (localStorage.getItem('age')===null || localStorage.getItem('age')=== undefined)? 0 :localStorage.getItem('age'),
                licensed_agent   : (localStorage.getItem('licensed_agent')===null || localStorage.getItem('licensed_agent')=== undefined)? 0 :localStorage.getItem('licensed_agent'),
                authorized_in_usa: (localStorage.getItem('authorized_in_usa')===null || localStorage.getItem('authorized_in_usa')=== undefined)? 0 :localStorage.getItem('authorized_in_usa'),
                terms_n_condition: (localStorage.getItem('terms_n_condition')===null || localStorage.getItem('terms_n_condition')=== undefined)? 0 :localStorage.getItem('terms_n_condition'),
                terms_stripe     : (localStorage.getItem('terms_stripe')===null || localStorage.getItem('terms_stripe')=== undefined)? 0 :localStorage.getItem('terms_stripe'),

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
        if(localStorage.getItem('userNotverified') == '1'){
            let userNotverifiedDetails = JSON.parse(localStorage.getItem('userNotverifiedDetails'));
            //console.log(userNotverifiedDetails);
            this.setState({
                first_name       : userNotverifiedDetails.first_name,
                last_name        : userNotverifiedDetails.last_name,
                user_id          : userNotverifiedDetails.phone,
                email            : userNotverifiedDetails.email,
                license_number   : userNotverifiedDetails.license_no,
                license_number_id: userNotverifiedDetails.license_number_id,
                license_state    : userNotverifiedDetails.license_issue_stateid,
                brokerage        : userNotverifiedDetails.brokerage_id,
                other_brokerage_name : userNotverifiedDetails.other_brokerage_name,
                age              : 1,
                licensed_agent   : 1,
                authorized_in_usa: 1,
                terms_n_condition: 1,
                terms_stripe     : 1,
                brokers_id       : userNotverifiedDetails.brokers_id

            });
        }
        if(nextProps.masterlicensedata != this.props.masterlicensedata && nextProps.masterlicensedata.status == false){
            ToastsStore.error(nextProps.masterlicensedata.message);
            this.setState({
                license_number      : '',
                license_number_id   : nextProps.masterlicensedata.masterlicense.id
            });
        }
        else if(nextProps.masterlicensedata != this.props.masterlicensedata && nextProps.masterlicensedata.status == true){
            //console.log('id :: ', nextProps.masterlicensedata.masterlicense[0].id);
            this.setState({
                license_number_id   : nextProps.masterlicensedata.masterlicense[0].id
            });
        }
        else if(nextProps.registeruserdata != this.props.registeruserdata && nextProps.registeruserdata.status === false){
            ToastsStore.error(nextProps.registeruserdata.message);

        }
        else if(nextProps.registeruserdata != this.props.registeruserdata && nextProps.registeruserdata.status === true){
            
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
           // brokerage_id              : this.state.brokerage,
            other_brokerage_name      : this.state.other_brokerage_name,
            latitude                  : crd.latitude,
            longitude                 : crd.longitude,
            brokers_id                : this.state.brokers_id
        }
       // console.log(param);
        localStorage.setItem('first_name', this.state.first_name);
        localStorage.setItem('last_name', this.state.last_name);
        localStorage.setItem('mobile_no', this.state.user_id);
        localStorage.setItem('email_id', this.state.email);
        localStorage.setItem('license_number', this.state.license_number);
        localStorage.setItem('license_number_id', this.state.license_number_id);
        localStorage.setItem('license_issuing_state_id', this.state.license_state);
        localStorage.setItem('brokerage_id', this.state.brokerage);
        localStorage.setItem('other_brokerage_name', this.state.other_brokerage_name);
        localStorage.setItem('age', this.state.age);
        localStorage.setItem('licensed_agent', this.state.licensed_agent);
        localStorage.setItem('authorized_in_usa', this.state.authorized_in_usa);
        localStorage.setItem('terms_n_condition', this.state.terms_n_condition);
        localStorage.setItem('terms_stripe', this.state.terms_stripe);

        localStorage.removeItem('userNotverifiedDetails');
        localStorage.removeItem('userNotverified');
        this.props.createAccountRequest(param);
    }
      
    error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        ToastsStore.error('Please allow your browser geolocation. ');
    }
      
    onSubmit(e){
        e.preventDefault();
       // this.success();

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
        }else if(e.target.name == 'age'){
            if(this.state.age===1)
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
        }else if(e.target.name == 'licensed_agent'){
            if(this.state.licensed_agent===1)
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
        }else if(e.target.name == 'authorized_in_usa'){
            if(this.state.authorized_in_usa===1)
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
        }else if(e.target.name == 'terms_stripe'){
            if(this.state.terms_stripe===1)
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
            && (this.state.other_brokerage_name != '')
            && (this.state.terms_n_condition != 0)
            && (this.state.age != 0)
            && (this.state.licensed_agent != 0)
            && (this.state.authorized_in_usa != 0)
            && (this.state.terms_stripe != 0)){
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
        //console.log('@@4444 ');
        return (
            <div className="form-container sign-up-container reg-frm">
                <form onSubmit={this.onSubmit}>
                    <h1>Create Account</h1>
                                      
                    <Scrollbars style={{ height: "52vh" }}
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
                            <input type="text" placeholder="Enter Brokerage" name="other_brokerage_name" id="other_brokerage_name"  onChange={this.handleChange} value={this.state.other_brokerage_name} required value={this.state.other_brokerage_name}/>
                            {/* <select className="custom-select" value={this.state.brokerage} name="brokerage" id="brokerage" onChange={this.handleChange} required>
                                
                                {   (this.state.master_brokerage.length > 0) ?
                                                                
                                    (this.state.master_brokerage).map((listitem,index) => {
                                        return(
                                            <option key={`brokerage_${index}`} value={listitem.id}>{listitem.name}</option>
                                        )
                                    })
                                    : null
                                }
                            </select> */}


                            <label className="container-check float-left" style={{marginBottom:'30px'}}><span>I am 18 years of age or older</span>
                                <input type="checkbox" name="age" id="age" onChange={this.handleChange} 
                                 checked={(this.state.age==1)?'checked':''}  />
                                 <span className="checkmark"></span>
                            </label>

                            <label className="container-check float-left" style={{marginBottom:'30px'}}><span>I am an active licensed real estate agent</span>
                                <input type="checkbox" name="licensed_agent" id="licensed_agent" onChange={this.handleChange} 
                                 checked={(this.state.licensed_agent==1)?'checked':''}  />
                                 <span className="checkmark"></span>
                            </label>

                            <label className="container-check float-left" style={{marginBottom:'30px'}}><span>I am authorized to work in the United States</span>
                                <input type="checkbox" name="authorized_in_usa" id="authorized_in_usa" onChange={this.handleChange} 
                                 checked={(this.state.authorized_in_usa==1)?'checked':''}  />
                                <span className="checkmark"></span>
                            </label>

                            <label className="container-check float-left" style={{marginBottom:'30px'}}><span>i agree to the Tryckl, LLC  <a href="/terms-n-condition" className="signup_link">terms and conditions</a></span>
                                <input type="checkbox" name="terms_n_condition" id="terms_n_condition" onChange={this.handleChange} 
                                 checked={(this.state.terms_n_condition==1)?'checked':''}  />
                                 <span className="checkmark"></span>
                            </label>
                            <label className="container-check float-left" style={{marginBottom:'30px'}}><span>i agree to the Stripe <a href="https://stripe.com/connect-account/legal" className="signup_link">Terms of Service</a></span>
                                <input type="checkbox" name="terms_stripe" id="terms_stripe" onChange={this.handleChange} 
                                 checked={(this.state.terms_stripe==1)?'checked':''}  />
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
