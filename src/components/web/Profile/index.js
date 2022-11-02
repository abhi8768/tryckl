import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
/* import ReactStars from "react-rating-stars-component"; */
import StarRatings from "react-star-ratings";
import { ToastsStore } from "react-toasts";
import HeaderUser from "../HeaderUser";
import Menu from "../Menu";
import Footer from "../Footer";
import { updateprofilePicture } from "../../../actions/web/brokerAction";

import ProfileDetail from "./detail";
import ProfileCompletion from "./completion";
import $$ from "jquery";
import "./profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    // setPublicIP();
    this.state = {
      profilepicture: "",
      name: "",
      rating: 0,
      currentview: "detail",
      brokerId:this.props.brokerId == ""? this.props.currentUserDetails.brokers_id: this.props.brokerId,
      isOwn: this.props.brokerId == "" ? true : false,
      details: {},
    };
    this.updatePicture = this.updatePicture.bind(this);      
  }

  componentDidMount() {           
    $$("#menu_profile").addClass("active");
    $$("#listing-header-icon").removeClass("active");
    $$("#home-header-icon").removeClass("active");
    
    //* for opening the verification form after plaid verification. 
    if (this.props.match.params.section) {
    // ToastsStore.error("Please Verify Your Account By Updating Your Account To Create List");
    this.setState({currentview: "edit"});
    }		
  }

  updatePicture(e) {
    this.props.updateprofilePicture({ image: e.target.files[0] });
  }

  UNSAFE_componentWillReceiveProps(nextProps, prevProps, prevState) {
   
    this.setState({
      details: nextProps.profiledetail, //testing for verification alert
    });

    if (nextProps.profileimage != this.props.profileimage) {
      this.setState({
        profilepicture: nextProps.profileimage.profile_photo,
      });
    } else {
      this.setState({
        profilepicture: nextProps.profiledetail.profile_photo,
        name: nextProps.profiledetail.first_name,
        rating: Number(nextProps.profiledetail.rating),
      });
    }
    // this.setState({
    //   currentview: nextProps.changeview,
    // });

  }

  render() {
    let letterImage = this.state.name.charAt(0);
    console.log(this.props.match.params.section,this.state.currentview, "stateprops");
    // console.log(this.state.details,"verificationDetails"); //testing,verification

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
                        <div
                          className={
                            this.state.profilepicture != ""
                              ? "user-block-status"
                              : "user-block-status d-flex align-items-center"
                          }
                        >
                          {this.state.profilepicture != "" ? (
                            <img
                              className="img-thumbnail rounded-circle"
                              src={this.state.profilepicture}
                              alt="Avatar"
                              style={{ height: "200px", width: "200px" }}
                            />
                          ) : (
                            <div className="alpha">{letterImage}</div>
                          )}

                          {this.state.isOwn == true ? (
                            <div className="pic-edit">
                              <label htmlFor="up">
                                <img
                                  className=""
                                  src="assets/img/edit-image2.png"
                                  alt="Image upload"
                                />
                              </label>
                            </div>
                          ) : null}
                          {this.state.isOwn == true ? (
                            <input
                              type="file"
                              id="up"
                              style={{ display: "none" }}
                              onChange={this.updatePicture}
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* testing start for wallet*/}
                  {this.state.details.is_bank_account_connected === 0 ? (
                    <div className="content-part-wrapper text-center">
                      <div style={{ marginLeft: "15px" }}>
                        <p className="information">
                          Wheather You're the one paying or getting paid, we
                          need to connect your non-business bank account to the
                          tryckl app. The information we ask for is secure and
                          is not shared with anyone outside of the tryckl funds
                          flow.
                        </p>
                        <button
                          className="okBtn"
                          // onClick={() => this.props.history.push(`/connect-account`)}                          
                          onClick={() => this.props.history.push(`/connect-account`)}
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="content-part-wrapper text-center">
                      <div style={{ marginLeft: "15px" }}>
                        <p className="information">
                          {/* Please Verify Your Account By Updating Your Account ! */}
                          You don't have Tryckl Wallet yet. To use Wallet
                          features please complete your user verification
                          process !
                        </p>
                        {/* <button
                          className="okBtn"
                          //onClick={()=>{this.setState({currentview: "edit"})}}                          
                        >
                          OK
                        </button> */}
                      </div>
                    </div>
                  )}


                  {/* testing, this is Dwolla Wallet Portion UI */}
                  {/* <div className="content-part-wrapper text-center">                                        
                    <h2 className="mid-heading">DWOLLA BALANCE</h2>
                    <div style={{ marginLeft: "15px" }}>
                      <p className="balance-css">
                        {this.props.profiledetail.dwolla_balance}
                      </p>
                    </div>
                  </div> */}

                  <div className="content-part-wrapper text-center">
                    <h2 className="mid-heading">RATING</h2>
                    <div style={{ marginLeft: "15px" }}>
                      {/*  
                        <ReactStars
                          value={rating}
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
                      */}
                      <StarRatings
                        rating={this.state.rating}
                        starRatedColor="#00FFFF"
                        /*   changeRating={this.changeRating} */
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="2px"
                      />
                    </div>
                  </div>
                </div>
                {this.state.currentview == "detail" ? (
                  <ProfileDetail
                    brokerId={this.state.brokerId}
                    isOwn={this.state.isOwn}
                    history={this.props.history}
                    location={this.props.location}
                    match={this.props.match}
                  />
                ) : (
                  <ProfileCompletion brokerId={this.state.brokerId} />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileimage: state.profilepicture.profilepicture,
    profiledetail: state.brokerdetail.profiledetail,
    changeview: state.profileactiveview.activeview,
    currentUserDetails: state.login.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateprofilePicture: bindActionCreators(updateprofilePicture, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
