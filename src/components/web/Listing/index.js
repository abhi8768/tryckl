import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import HeaderUser from '../HeaderUser';
import Menu from '../Menu';
import { currentActiveView } from "../../../actions/web/listingAction";

import $$ from 'jquery';
import ListingCreate from "./create";
import ListingPreview from "./preview";
import MyListing from "./mylisting";
import DetailListing from "./detail";

class Listing extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();

   let curUrl = window.location.href;
   let currentview = '';
   let currentviewcomp = '';
   if(curUrl.includes("create-listing") == true){
    currentview = 'createlisting';
    currentviewcomp = <ListingCreate />;
   }else if(curUrl.includes("preview-listing") == true){
    currentview = 'createlisting';
    currentviewcomp = <ListingCreate />;
   }else if(curUrl.includes("detail-listing") == true){
    currentview = 'detaillisting';
    currentviewcomp = <DetailListing />;
   }else{
    currentview = 'mylisting';
    currentviewcomp = <MyListing />;
   }
  
    this.state = {
      currentview      : currentview,
      currentviewcomp  : currentviewcomp,
        
    }
    this.updatePicture = this.updatePicture.bind(this);
  }
 
  componentDidMount(){ 
    $$("#menu_profile").removeClass('active');
    $$("#listing-header-icon").addClass('active');
    $$("#home-header-icon").removeClass('active');
  }
  
  updatePicture(e){

    this.props.updateprofilePicture({ image : e.target.files[0] });

  }

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    console.log(nextProps.changeview);
    this.setState({
      currentview : nextProps.changeview
    })
    if(nextProps.changeview == 'mylisting'){
      this.setState({
        currentviewcomp : <MyListing />
      })
    }else if(nextProps.changeview == 'previewlisting'){
      this.setState({
        currentviewcomp : <ListingPreview />
      })

    }else if(nextProps.changeview == 'createlisting'){
      this.setState({
        currentviewcomp : <ListingCreate />
      })

    }else if(nextProps.changeview == 'detaillisting'){
      this.setState({
        currentviewcomp : <DetailListing />
      })
    }else{
      this.setState({
        currentviewcomp : <MyListing />
      })
    }
   
	}
  
 

  render() {
      
    return (
		<div className="wrapper">
			<HeaderUser />
			<Menu />

            <section className="section-container">
       
                     <div className="content-wrapper">
          
                        <div className="container gapfrm-top">
                          {this.state.currentviewcomp }
                            
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
)(Listing);

