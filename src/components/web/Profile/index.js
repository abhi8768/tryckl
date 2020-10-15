import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


import HeaderUser from '../HeaderUser';
import Menu from '../Menu';
import Footer from '../Footer';
import { dashboardRequest } from "../../../actions/web/dashboardAction";
import  ProfileDetail  from "./detail";


class Profile extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
    this.state = {
      profilepicture : '',
      name           : '',
      rating         : 3.5
    }

  }
 
    componentDidMount(){
         
		this.props.dashboardRequest();
	}

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    this.setState({
      profilepicture : nextProps.profiledetail.profile_photo,
      name           : nextProps.profiledetail.first_name,
      //rating         : Number(nextProps.profiledetail.rating)
		})
	}
  
 

  render() {
    let letterImage = this.state.name.charAt(0);
    console.log(this.state.rating);
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
                                                            <img className="img-thumbnail rounded-circle" src={this.state.profilepicture} alt="Avatar" />
                                                            :  <div className="alpha">{letterImage}</div>
                                                        }
                                                        

                                                        <div className="pic-edit">
                                                          <label htmlFor="up">
                                                            <img className="" src="assets/img/edit-image.png" alt="Avatar" />
                                                          </label>
                                                        </div>
                                                        <input type="file" id="up"style={{display : "none"}} />
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

                                 <ProfileDetail /> 
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
    profiledetail  : state.brokerdetail.profiledetail,
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
		dashboardRequest : bindActionCreators(dashboardRequest , dispatch),
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

