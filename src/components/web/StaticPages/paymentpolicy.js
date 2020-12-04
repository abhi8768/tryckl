import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { currentActiveView } from "../../../actions/web/listingAction";

import $$ from 'jquery';



class PaymentPolicy extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
    this.state = {
      currentview    : 'mylisting',
      
    }
   
  }
 
  componentDidMount(){ 
    
  }
 

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    console.log(nextProps.changeview);
    this.setState({
      currentview : nextProps.changeview
    })
   
	}
  
 

  render() {
      
    return (
        
<div className="content-part-wrapper profile-content-part-wrapper">
            <div className="content-part-wrapper">
              <h2 className="mid-heading">Payment Policy</h2>
              <div className="content-part-wrapper profile-content-part-wrapper list-pre">
                <div className="content-part-wrapper dark-part position-relative static-pages">
               
              <p className="ohters-color2">A.  Deliverables specified in a Service Engagement may typically be completed in one day, though the time between accepting the Service Request and completing the Service Engagement may span more than one day.</p>
            
              <p className="ohters-color2">B.   You agree to use your reasonable best efforts to create each Service Request with accuracy and professionalism providing the greatest opportunity for success to an Accepting User. You agree to use your reasonable best efforts to complete each Service Engagement in accordance with the requirements and specifications of the Requesting User.  By entering into a Service Engagement, you are entering into a binding agreement as either the Requesting User or Accepting User resolve a needed service for a specified Payment.  You must not create a Service Request </p>
 <ul className="static-list">
                <li>for a service that is not legitimately needed; </li>
                <li>for a service that you are not willing to provide payment for; </li>
                <li>that you cannot provide clear and concise instructions for;</li>
                <li>if you do not have licensed authority by the governing agency to engage in such labors yourself.</li>

              </ul>
<p className="ohters-color2"> You must not accept a Service Request unless you are confident that you</p>

<ul className="static-list">
                <li>understand the requirements of the job;</li>
                <li>have the ability to get to the job location;</li>
                <li>have the qualifications, tools and ability to perform the requested services and complete all of the Deliverables; and </li>
                <li>will be able to complete the Deliverables within the requested time.</li>

              </ul>




             


              <p className="ohters-color2">C.   At the completion of a Service Engagement, the Requesting User will have four hours to approve payment.  If the Requesting User fails to approve payment in this amount of time, payment will automatically be sent to the Accepting user, so long as the Accepting User has completed the work in a manner consistent with the definitions in the Terms and Conditions.  When payment is approved, (i) Tryckl will reconcile the credit balances of both Users who are party to that Service Engagement to transfer the agreed upon balance from the Requesting User to the Accepting User, reducing the amount credited to the Accepting user by any and all fees for payment processing and administrative fees for providing the Service; (ii) if the Requesting User does not have sufficient credit balance within the Application to provide full payment, a minimum of $25 USD up to the full amount needed, will be transferred from the Requesting User’s bank account to Tryckl in order to satisfy full payment.  Tryckl will complete the balance transfer within twenty-four (24) hours after the Requesting User’s acceptance of the relevant Deliverables and Tryckl’s receipt of payment from the Requesting User.  The Payment will be Tryckl LLC’s only liability to you for services that you render under a Service Engagement.  Tryckl will not cover or reimburse any expenses associated with your performance of a Service Engagement.  If there is a dispute between you and the other User regarding completion of the Deliverables, you are solely responsible for resolving the dispute with the User.  Tryckl will exercise its reasonable best efforts to collect payment from the Requesting User promptly after the Deliverables are completed, but Tryckl does not guarantee such payments.  You agree that Tryckl will not be liable for any delay in payment to you based on Requesting User’s refusal to accept the Deliverables or failure to make timely payment to Tryckl.   A Service Engagement may be canceled at any time by the Requesting User fifteen minutes prior to commencement of performance.</p>
              <p className="ohters-color2">D.   You agree that if a Service Engagement is cancelled within fifteen minutes of the scheduled start time of the Service Engagement, the amount pledged will be paid to the Accepting User.  Typical fees will be charged by Tryckl in the same manner as other Service Engagements.</p>
             
          
              
             
            </div>
             

              
           
              </div>
            </div>
          </div>
                
	 );
  }
}

const mapStateToProps = state => {
  return {
    changeview          : state.listingactiveview.activelistingview,
    currentUserDetails  : state.login.user,
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
    currentActiveView : bindActionCreators(currentActiveView , dispatch),
    
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentPolicy);

