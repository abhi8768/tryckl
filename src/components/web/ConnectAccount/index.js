import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {ToastsStore} from 'react-toasts';
import Modal from "react-responsive-modal";

import { fetchMasterData } from "../../../actions/web/masterAction";
import { createAccountRequest } from "../../../actions/web/authAction";

import { TrendingUpTwoTone } from '@material-ui/icons';
import {usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess,} from 'react-plaid-link';
import {PlaidLink} from 'react-plaid-link'
class ConnectAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open         : true,
            linkToken: "",
        }
        this.onOpenModal  = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onSkip       = this.onSkip.bind(this);
            
    }
    onOpenModal() {
      this.setState({open: true});
    };
    onCloseModal() {
      this.setState({ open : false  });
    };

    onSkip(type){
      if(type == 'BACK'){
        this.props.history.push(`/my-listing`);
      }else{
        this.props.history.push(`/dashboard`);
      }
    }

    componentDidMount(){
      this.setState({linkToken: localStorage.getItem('link_token')});
     
      let userDetails = JSON.parse(localStorage.getItem('userDetails'));
      if((userDetails.payment_onboard_acc_id != null) || (userDetails.payment_onboard_acc_id != '')){
        let elmButton = document.querySelector("#submit");

        if (elmButton) {
          elmButton.addEventListener(
            "click",
            e => {
              elmButton.setAttribute("disabled", "disabled");
              elmButton.textContent = "Opening...";
        
              fetch("https://api.tryckl.com/api/v1/payment/payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  brokers_id : userDetails.brokers_id,
                  request_from : (sessionStorage.getItem('connectfromlisting') == '1') ? 'web_listing' : 'web_signup'
                })
              })
                .then(response => response.json())
                .then(data => { 
                  console.log(data);
                  if (data.url) {
                    window.location = data.url;
                  } else {
                    elmButton.removeAttribute("disabled");
                    elmButton.textContent = "<Something went wrong>";
                    console.log("data", data);
                  }
                });
            },
            false
          );
        }
      }else{
        this.props.history.push(`/dashboard`);
      }
    }
    
    UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){ 
        
       
    }

    
      
   
      

   

    handleChange(e) {

    }

    // handleOnSuccess(token, metadata) {
    //   // send token to client server
    // }
    handleOnExit() {
      // handle the case when your user exits Link
    }
 
    handleOnSuccess(public_token, metadata) {
      console.log(public_token);
     
     fetch(`${apiURLPrefix}/plaid/exchange_public_token`, {
        method: "POST",
        headers: {
          Authorization     : 'Bearer ' + localStorage.getItem('jwtToken'),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          public_token : public_token,
          account_id : metadata.account_id
        })
      })
        .then(response => response.json())
        .then(data => { 
          console.log('mydata', data);
          if(data.status_code === 200)
          {

            fetch(`${apiURLPrefix}/dwolla/update_dwolla_customer`, {
              method: "POST",
              headers: {
                Authorization     : 'Bearer ' + localStorage.getItem('jwtToken'),
                "Content-Type": "application/json"
              },
              body: JSON.stringify(
              {
                user_type : data.response.user_type,
                first_name:data.response.first_name,
                last_name:data.response.last_name,
                email_id:data.response.email,
                address1 : "Laketown",
                address2  : "",
                state_id : 2,
                city	: "test",
                state_code : "MT",
                postal_code : "12345",
                dateOfBirth : "1992-08-23",
                ssn : "1234"
              })
            })
              .then(response => response.json())
              .then(data => { 
               console.log('dwalalaupdate---',data);
              });

          }
        });

      // send token to client server
    }

    updateDwollaCustomer(data){

    } 
    render() {
      const {linkToken} = this.state
     // const {linkToken} = localStorage.getItem('link_token');
        return (
         
            <Modal open={this.state.open} onClose={this.onCloseModal} showCloseIcon={false} center id="payment-modal">
                
            
                <div className="modal-body text-center">
                    <h4>CONNECT ACCOUNT</h4>
                    <div className="pop-mid-sec">
                        <img src="/assets/img/stripe.png" className="img-fluid" />
                    </div>
                  
                    <div className="ver-frm-wrapper">
                    {localStorage.getItem('link_token').toString()}
                  
                    
                    
                       {
                       localStorage.getItem('link_token').toString()!== 'undefined' ? 
       <PlaidLink 
       token={localStorage.getItem('link_token').toString()} 
       env="sandbox" 
       onSuccess={this.handleOnSuccess}
       onExit={this.handleOnExit}>
         Connect To Plaid
         </PlaidLink> 
         : null
        } 
      
      
                   
                        {/* <button id="submit">CONNECT TO STRIPE</button>
                        {
                          (sessionStorage.getItem('connectfromlisting') == '1')  ? 
                          <p className="skip"><a href={void(0)} id="submit2" onClick={() => this.onSkip('BACK')}>BACK</a></p> :
                          <p className="skip"><a href={void(0)} id="submit2" onClick={() => this.onSkip('SKIP')}>SKIP</a> FOR NOW</p> 

                        }
                         */}
                                
                    </div>
                  </div>
              
                
            </Modal>
          
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
  )(ConnectAccount));
