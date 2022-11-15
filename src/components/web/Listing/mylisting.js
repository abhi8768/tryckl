import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { ToastsStore } from "react-toasts";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import { encrypt } from "../../../helpers/CryptoJs";
import {
  requestMylisting,
  listinginLocalStorage,
} from "../../../actions/web/listingAction";
import { getprofileDetails } from "../../../actions/web/brokerAction";
import $$ from "jquery";
import Modal from "react-responsive-modal";
// import  from "@material-ui/core/Dialog";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
// const BrowserHistory = require('react-router/lib/BrowserHistory').default;
// import {BrowserHistory} from 'react-router-dom'

class MyListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myListing: [],
      opendropdown: false,
      dropdownValue: "Open",
      conneected_account: null,
      open: false,
      onVerificationModal: false,      
    };
    this.openDropdown = this.openDropdown.bind(this);
    this.requestmylisting = this.requestmylisting.bind(this);
    this.linktocreate = this.linktocreate.bind(this);
    this.gotoDetail = this.gotoDetail.bind(this);
    this.gotoProfile = this.gotoProfile.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.openNonVerifiedModal = this.openNonVerifiedModal.bind(this)
    this.closeNonVerifiedModal = this.closeNonVerifiedModal.bind(this)
  }

  onOpenModal() {
    console.log("Hi");    
    this.setState({ open: true });       
  }
  onCloseModal() {
    this.setState({ open: false });
  }

  componentDidMount() {
    this.requestmylisting("");
    this.props.getprofileDetails({
      brokers_is: this.props.currentUserDetails.user.brokers_id,
    }); 
    localStorage.setItem('page', "mylisting");//* for doing redirection after plaid verification       
  }
  //* activating modal popup into my listing page for dwolla start
  openNonVerifiedModal() {
    this.setState({ onVerificationModal: true });
  }
  closeNonVerifiedModal(){
    console.log("no button clicked")
    this.setState({ onVerificationModal: false });
  }
  //* activating modal popup into my listing page for dwolla ends

  requestmylisting(type) {
    this.setState({ dropdownValue: type == "" ? "OPEN" : type });
    this.props.requestMylisting({ flag: type });
  }

  linktocreate() {
    if (
      this.state.conneected_account != null &&
      this.state.conneected_account === "verified"
    ) {
      console.log("if");
      this.props.listinginLocalStorage("createlisting");
      this.props.history.push(`create-listing`);
    } else {
      console.log("else");
      sessionStorage.setItem("connectfromlisting", "1");
      // this.props.history.push(`/profile/edit`); //testing
      this.props.history.push(`/my-listing`);       
      
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps, prevProps, prevState) {
    console.log(nextProps.profiledetail, "check");
    //console.log('nextProps.mylisting.list',nextProps.mylisting.list);

    if (nextProps.mylisting.list) {
      this.setState({
        myListing: nextProps.mylisting.list,
        opendropdown: false,
      });
    }

    // if (nextProps.profiledetail) {
    //   //console.log(nextProps.profiledetail.payment_onboard_acc_id);
    //   if (
    //     nextProps.profiledetail.payment_onboard_acc_id != "" ||
    //     nextProps.profiledetail.payment_onboard_acc_id != null
    //   ) {
    //     this.setState({
    //       conneected_account: nextProps.profiledetail.payment_onboard_acc_id,
    //     });
    //   }
    // }
    
    if (nextProps.profiledetail) {
      //console.log(nextProps.profiledetail.payment_onboard_acc_id);
      if (
        nextProps.profiledetail.customer_status != "" ||
        nextProps.profiledetail.customer_status === "verified"
      ) {
        this.setState({
          conneected_account: nextProps.profiledetail.customer_status,
        });
      }
    }
  }

  openDropdown() {
    this.setState({
      opendropdown: !this.state.opendropdown,
    });
  }
  gotoDetail(listing_id) {
    this.props.listinginLocalStorage(`detaillisting/${listing_id}`);
    this.props.history.push(`detail-listing/${encrypt(listing_id)}`);
  }
  gotoProfile(brokers_id) {
    this.props.history.push(`/profile/${encrypt(brokers_id)}`);
  }

  render() {
    console.log(this.props, this.state.opendropdown, "props");
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-3">
            <div className="content-part-wrapper text-center">
              <div className="item user-block user-part no-pad">
                <div className="user-block-picture custom-user-block-picture2">
                  <h2 className="mid-heading">
                    Create New
                    <br />
                    LISTING
                  </h2>
                  <div
                    className="user-block-status d-flex align-items-center other-color clickable"
                    // onClick={() => { //* testing
                    //   if (
                    //     this.props.profiledetail.is_bank_account_connected === 0
                    //   ) {
                    //     this.onOpenModal();
                    //   } else {
                    //     this.linktocreate();
                    //   }
                    // }}
                    onClick={() => {
                      //* testing
                      if (this.props.profiledetail.is_bank_account_connected === 0) {
                        this.onOpenModal();
                      }else if (this.props.profiledetail.is_bank_account_connected !== 0) {
                        this.openNonVerifiedModal();                        
                      } else {
                        this.linktocreate();
                      }
                    }}
                  >
                    <div className="alpha">
                      <img className="" src="/assets/img/plush-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="content-part-wrapper"
              style={{ paddingBottom: "9px" }}
            >
              <h2 className="mid-heading">
                LISTINGS
                <div className="dropdown show custom-drop">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    // href={void 0}
                    // role="button"
                    // id="dropdownMenuLink"
                    // data-toggle="dropdown"
                    // aria-haspopup="true"
                    // aria-expanded="false"
                    onClick={this.openDropdown}
                  >
                    <img className="" src="/assets/img/drop-icon.png" />{" "}
                    {this.state.dropdownValue}
                  </a>

                  {this.state.opendropdown && (
                    <div
                      className={`dropdown-menu`}
                      // aria-labelledby="dropdownMenuLink"
                    >
                      <a
                        className="dropdown-item"
                        href={void 0}
                        onClick={() => this.requestmylisting("")}
                      >
                        Open
                      </a>
                      <a
                        className="dropdown-item"
                        href={void 0}
                        onClick={() => this.requestmylisting("Complete")}
                      >
                        Complete
                      </a>
                    </div>
                  )}
                </div>
              </h2>
            </div>
            {/* Implementing Popup for plaid & dwolla verification starts*/}
            {this.props.profiledetail.is_bank_account_connected === 0 ? (
              <div
                className="popup-box"
                style={{
                  position: "fixed",
                  width: "60%",
                  height: "5vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginTop: "70px",
                  
                }}
              >
                <div
                  className="box"
                  style={{
                    width: "50%",
                    minHeight: "50px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 100,
                      color: "black",
                    }}
                  >
                    <ReportProblemIcon />
                    {"    "}Please connect your bank account to Tryckl App.
                  </p>
                  <button
                    style={{
                      float: "right",
                      border: "none",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "lighter",
                      color: "#0275d8",
                      paddingRight: "20px",
                    }}
                    onClick={() => this.props.history.push(`/connect-account`)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="popup-box"
                style={{
                  position: "fixed",
                  width: "60%",
                  height: "5vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginTop: "70px",
                }}
              >
                <div
                  className="box"
                  style={{
                    width: "50%",
                    minHeight: "50px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 100,
                      color: "black",
                    }}
                  >
                    <ReportProblemIcon />
                    {"    "}You have to complete your verification process in order 
                    <div style={{marginLeft:'32px'}}>to create list and use features of Wallet.</div>
                  </p>
                  <button
                    style={{
                      float: "right",
                      border: "none",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "lighter",
                      color: "#0275d8",
                      paddingRight: "20px",
                    }}
                    onClick={() => this.props.history.push(`/profile/edit`)}
                    // onClick={() => this.props.history.push(`/profile`)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            )}
            {/* Implementing Popup for plaid & dwolla verification ends*/}

            {this.state.myListing.length > 0 ? (
              this.state.myListing.map((item, index) => {
                let letterImage = item.accepted_by_name.charAt(0);
                let due_status = "";
                if (item.due_day != "") {
                  if (item.due_day != "0") {
                    due_status = `Due in ${item.due_day} days`;
                  } else {
                    due_status = `Due today`;
                  }
                } else {
                  if (item.listing_status == "ACCEPTED") {
                    due_status = `IN PROGRESS`;
                  } else if (item.listing_status == "COMPLETED") {
                    if (item.payment_status == "0") {
                      due_status = `IN REVIEW`;
                    } else {
                      due_status = `COMPLETED`;
                    }
                  } else if (item.listing_status == "OVERDUE") {
                    due_status = `OVERDUE`;
                  } else {
                  }
                }

                return (
                  <div
                    className="content-part-wrapper profile-content-part-wrapper list-pre"
                    key={`row${index}`}
                    onClick={() => this.gotoDetail(item.listing_id)}
                  >
                    <div className="content-part-wrapper dark-part position-relative mylist-adjust">
                      <div className="row">
                        <div className="col-sm-8">
                          <p className="ohters-color">
                            Type-
                            <span className="ohters-color2"> {item.type}</span>
                          </p>
                        </div>
                        <div className="col-sm-4 text-right">
                          <h2 className="card-amount">
                            {item.type == "Open House"
                              ? "leads"
                              : `$ ${item.offer_amount}`}
                          </h2>
                          <p className="ohters-color3">{due_status}</p>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center">
                        <div className="col-sm-8">
                          <div className="item user-block  d-flex align-items-center">
                            <div className="">
                              <div className="user-block-status">
                                <img
                                  className="rounded-circle"
                                  src="/assets/img/calender-icon.png"
                                  alt="Avatar"
                                  width="40"
                                  height="40"
                                />
                              </div>
                            </div>
                            <div className="profile2-list-txt ohters-color2">
                              {item.date}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center">
                        <div className="col-sm-8">
                          <div className="item user-block  d-flex align-items-center">
                            <div className="">
                              <div className="user-block-status">
                                <img
                                  className="rounded-circle"
                                  src="/assets/img/time-icon.png"
                                  alt="Avatar"
                                  style={{ width: "40px", height: "40px" }}
                                />
                              </div>
                            </div>
                            <div className="profile2-list-txt ohters-color2">
                              {item.time}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center">
                        <div className="col-sm-8">
                          {item.accepted_by != "" ? (
                            <div className="item user-block  d-flex align-items-center">
                              <div className="">
                                <div className="user-block-status">
                                  {item.accepted_by_profile_photo != "" ? (
                                    <img
                                      className="rounded-circle"
                                      src={item.accepted_by_profile_photo}
                                      alt="Avatar"
                                      style={{ width: "40px", height: "40px" }}
                                    />
                                  ) : (
                                    <div className="small-profile-alpha text-center">
                                      {letterImage}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="profile2-list-txt ohters-color2">
                                Accepted by:
                                <br />
                                <p
                                  className="ohters-color4"
                                  onClick={() =>
                                    this.gotoProfile(item.accepted_by)
                                  }
                                >
                                  {item.accepted_by_name}
                                </p>
                              </div>
                            </div>
                          ) : null}
                        </div>
                        {item.listing_status == "OVERDUE" ? (
                          <div className="col-sm-4 text-right">
                            <img
                              src="/assets/img/error.png"
                              className="text-right"
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div> No record Found </div>
            )}
          </div>
        </div>
        {this.state.open && (
          <Dialog
            onClose={this.onCloseModal}
            open={this.state.open}
            keepMounted
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Connect Bank Account?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Wheather You're the one paying or getting paid, we need to
                connect your non-business bank account to the tryckl app. The
                information we ask for is secure and is not shared with anyone
                outside of the tryckl funds flow
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={this.onCloseModal} color="primary">
                No
              </Button> */}
              <Button
                onClick={() => this.props.history.push(`/connect-account`)}
                // onClick={() => this.props.history.push(`/profile`)}
                color="primary"
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        )}
        {/* //* popup onClick of create listing icon after plaid verification starts */}
        {this.state.onVerificationModal && (
          <Dialog
            onClose={this.closeNonVerifiedModal}
            open={this.state.onVerificationModal}
            keepMounted
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            {/* <DialogTitle id="alert-dialog-slide-title">
              {"Connect Bank Account with Dwolla Account?"}
            </DialogTitle> */}
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
              <ReportProblemIcon />
              {"    "}You have to complete your verification process in order to create list and 
              <div style={{marginLeft:"32px"}}>use features of Wallet.</div> 
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={()=>this.closeNonVerifiedModal} color="primary">              
                No
              </Button> */}
              <Button
                onClick={() => this.props.history.push(`/profile/edit`)}
                // onClick={() => this.props.history.push(`/profile`)}
                color="primary"
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>)}
        {/* {this.state.onVerificationModal && (
          <div
            className="popup-box"
            style={{
              position: "fixed",
              width: "60%",
              height: "5vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              marginTop: "40px",
            }}
          >
            <div
              className="box"
              style={{
                width: "50%",
                minHeight: "50px",
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                padding: "10px",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontWeight: 100,
                  color: "black",
                }}
              >
                <ReportProblemIcon />
                {"    "}Please connect your bank account with Dwolla.
              </p>
              <button
                style={{
                  float: "right",
                  border: "none",
                  backgroundColor: "#FFFFFF",
                  fontWeight: "lighter",
                  color: "#0275d8",
                  paddingRight: "20px",
                }}
                onClick={() => this.props.history.push(`/connect-account`)}
              >
                Yes
              </button>
            </div>
          </div>
        )} */}
        {/* //* popup onClick of creat listing icon after plaid verification ends */}

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mylisting: state.mylisting.mylisting,
    currentUserDetails: state.login,
    profiledetail: state.brokerdetail.profiledetail,
    dasboarddetail: state.dashboarddetail.dashboard,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestMylisting: bindActionCreators(requestMylisting, dispatch),
    listinginLocalStorage: bindActionCreators(listinginLocalStorage, dispatch),
    getprofileDetails: bindActionCreators(getprofileDetails, dispatch),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MyListing)
);
