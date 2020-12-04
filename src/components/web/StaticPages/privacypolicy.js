import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { currentActiveView } from "../../../actions/web/listingAction";

import $$ from 'jquery';



class PrivacyPolicy extends Component {
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
              <h2 className="mid-heading">Privacy Policy</h2>
              <div className="content-part-wrapper profile-content-part-wrapper list-pre">
                <div className="content-part-wrapper dark-part position-relative static-pages">
               <p className="ohters-color">PRIVACY</p> 
              <p className="ohters-color2">This privacy notice discloses the privacy practices employed by Tryckl, LLC (“Tryckl”). This privacy notice applies solely to information collected by this website. It will notify you of the following: What personally identifiable information is collected from you through the website and/or application, how it is used and with whom it may be shared. What choices are available to you regarding the use of your data. The security procedures in place to protect the misuse of your information. How you can correct any inaccuracies in the information.</p>
              <p className="ohters-color">Information Collection, Use, and Sharing. </p>
              <p className="ohters-color2">We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone. We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to list/accept offers, etc. Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy. </p>
              <p className="ohters-color2">Your Control Over Your Information</p>
              <p className="ohters-color2">You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address below: </p>
              <ul className="static-list">
                <li>See what data we have about you, if any.</li>
                <li>Change/correct any data we have about you.</li>
                <li>Have us delete any data we have about you.</li>
                <li>Express any concern you have about our use of your data.</li>

              </ul>
              <p className="ohters-color2"><a href="mailto:info@tryckl.com">info@tryckl.com</a></p>
            
               
             
              
             
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
)(PrivacyPolicy);

