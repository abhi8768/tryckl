import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


import HeaderUser from '../HeaderUser';
import Menu from '../Menu';
import Footer from '../Footer';
import { updateprofilePicture } from "../../../actions/web/brokerAction";

import $$ from 'jquery';
import ListingCreate from "./create";


class Listing extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
    this.state = {
      profilepicture : '',
      name           : '',
      rating         : 0,
      currentview    : 'detail',
      brokerId       : this.props.brokerId == '' ? this.props.currentUserDetails.brokers_id : this.props.brokerId,
      isOwn          : (this.props.brokerId == '') ? true : false
    }
    this.updatePicture = this.updatePicture.bind(this);
  }
 
  componentDidMount(){ 
    $$("#menu_profile").addClass('active');
  }
  
  updatePicture(e){

    this.props.updateprofilePicture({ image : e.target.files[0] });

  }

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    
    if(nextProps.profileimage != this.props.profileimage){
      this.setState({
       profilepicture : nextProps.profileimage.profile_photo
      })
    }else{
      this.setState({
        profilepicture : nextProps.profiledetail.profile_photo,
        name           : nextProps.profiledetail.first_name,
        rating         : Number(nextProps.profiledetail.rating)
      })
    }
    this.setState({
      currentview : nextProps.changeview
    })
   
	}
  
 

  render() {
    let letterImage = this.state.name.charAt(0);
  
    return (
		<div className="wrapper">
			<HeaderUser />
			<Menu />

            <section className="section-container">
       
                     <div className="content-wrapper">
          
                        <div className="container gapfrm-top">
                            <ListingCreate />
                        </div>
                    </div>
            </section>
        </div>
	 );
  }
}

const mapStateToProps = state => {
	return {
    profileimage        : state.profilepicture.profilepicture,
    profiledetail       : state.brokerdetail.profiledetail,
    changeview          : state.profileactiveview.activeview,
    currentUserDetails  : state.login.user,
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
		updateprofilePicture : bindActionCreators(updateprofilePicture , dispatch),
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);

