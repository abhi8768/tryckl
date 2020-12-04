import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


import HeaderStatic from '../HeaderStatic';
import { currentActiveView } from "../../../actions/web/listingAction";

import $$ from 'jquery';
import Aboutus from "./aboutus";
import Paymentpolicy from "./paymentpolicy";
import Privacypolicy from "./privacypolicy";
import Termsncondition from "./termsncondition";



class StaticPages extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
    this.state = {
      currentview    : <Aboutus />,
      
    }
    this.updatePicture = this.updatePicture.bind(this);
  }
 
  componentDidMount(){ 
    if((window.location.href).includes('about-us') == true){
        this.setState({
          currentview : <Aboutus />
        })
    }else if((window.location.href).includes('payment-policy') == true){
      this.setState({
        currentview : <Paymentpolicy />
      })

    }else if((window.location.href).includes('terms-n-condition') == true){
      
      this.setState({
        currentview : <Termsncondition />
      })
    }else if((window.location.href).includes('privacy-policy') == true){
      this.setState({
        currentview : <Privacypolicy />
      })
    }else{

    }
  }
  
  updatePicture(e){

    this.props.updateprofilePicture({ image : e.target.files[0] });

  }

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    console.log('2',window.location.href);
   
	}
  
 

  render() {
      
    return (
        <div className="wrapper static-wrapper"> 
        <HeaderStatic />
        <section className="section-container"> 
        
          <div className="content-wrapper">
         
          <div className="container gapfrm-top">
            <div className="row">
              
              <div className="col-lg-12">
                {this.state.currentview}
                <div className="col-lg-3"> </div>
              </div>
            </div>
           
          </div>
          </div>
        </section>
       
       
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
)(StaticPages);

