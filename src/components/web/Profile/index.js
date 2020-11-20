import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


import HeaderUser from '../HeaderUser';
import Menu from '../Menu';
import Footer from '../Footer';
import { updateprofilePicture } from "../../../actions/web/brokerAction";
import  ProfileDetail  from "./detail";
import ProfileCompletion from "./completion";
import $$ from 'jquery';


class Profile extends Component {
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
    $$("#listing-header-icon").removeClass('active');
    $$("#home-header-icon").removeClass('active');
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
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="content-part-wrapper text-center">
                   
                                        <div className="item user-block user-part no-pad">
                                            
                                            <div className="user-block-picture custom-user-block-picture2">
                                                <div className={(this.state.profilepicture != '') ? 'user-block-status' : 'user-block-status d-flex align-items-center'}>
                                                        {
                                                          (this.state.profilepicture != '') ?
                                                            <img className="img-thumbnail rounded-circle" src={this.state.profilepicture} alt="Avatar" style={{height : '200px', width : '200px'}}/>
                                                            :  <div className="alpha">{letterImage}</div>
                                                        }
                                                        
                                                        {
                                                          (this.state.isOwn == true) ?
                                                          <div className="pic-edit">
                                                            <label htmlFor="up">
                                                              <img className="" src="assets/img/edit.png" alt="Image upload" />
                                                            </label>
                                                          </div>
                                                          : null
                                                        }
                                                        {
                                                          (this.state.isOwn == true) ?
                                                            <input type="file" id="up"style={{display : "none"}} onChange={this.updatePicture}/>
                                                          : null
                                                        }
                                                       
                                                </div>

                                            </div>
                                        </div>
                                    </div>
               
                                    <div className="content-part-wrapper text-center">
                                    <h2 className="mid-heading">RATING</h2>
                                        <div style={{marginLeft: '50px'}}>  
                                             
                                              <ReactStars
                                                value={this.state.rating}
                                                size={20}
                                                count= {5}
                                                color= "#00FFFF"
                                                activeColor= "#00FFFF"
                                                edit = {false}
                                                isHalf= {true} 
                                                a11y = {true}
                                                emptyIcon = {<i className="far fa-star" />}
                                                halfIcon= {<i className="fa fa-star-half-alt" />}
                                                filledIcon= {<i className="fa fa-star" />}
                                              />
                                              
                                        </div>   
                                    </div>
                                </div>
                                 {
                                   (this.state.currentview == 'detail') ?
                                   <ProfileDetail brokerId = {this.state.brokerId} isOwn={this.state.isOwn}/> 
                                   : <ProfileCompletion brokerId = {this.state.brokerId} />
                                 }         
                                 
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
)(Profile);

