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


class ConnectAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open : true
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
    onSkip(){
      this.props.history.push(`/dashboard`);
    }

    componentDidMount(){
      
      let userDetails = JSON.parse(localStorage.getItem('userDetails'));
      console.log(userDetails.brokers_id);
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
                request_from : 'web_signup'
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

    
    render() {
        return (
            
            <Modal open={this.state.open} onClose={this.onCloseModal} showCloseIcon={false} center id="payment-modal">
                
            <div className="modal-content">
      
                <div className="modal-body">
                  <h4 className="text-center">Connect To Your Stripe Account</h4>
                <img src="/assets/img/stripe.png" className="img-fluid" style={{width : '500px'}}/>
                <h3 className="text-center">Signup Successfully</h3>
                <div className="ver-frm-wrapper">
                    <button id="submit">Connect</button>
                    <button id="submit2" onClick={this.onSkip}>Skip</button>
                              
              </div>
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
