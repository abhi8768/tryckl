import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import HeaderUser from "../HeaderUser";
import Menu from "../Menu";
import { changeView } from "../../../actions/web/listingAction";
import { requestOfferlisting } from "../../../actions/web/listingAction";
import $$ from "jquery";
import { getAuthHeader } from "../../../helpers/authHelper";
import { handleResponse } from "../../../actions/utils";

class Searching extends Component {
  constructor(props) {
    super(props);
    // setPublicIP();
    // this.fetchoffers = this.fetchoffers(this);
  }

  componentDidMount() {
    this.props.requestOfferlisting(this.props.brokerId);
  }

  render() { console.log(this.props.offerDetails.offerlist, "props");
    return (
      <div className="wrapper">
        <HeaderUser />
        <Menu />

        <section className="section-container">
          <div className="content-wrapper">
            <div className="container gapfrm-top">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="content-part-wrapper"
                    style={{ paddingBottom: "9px" }}
                  >
                    <h2 className="mid-heading">
                      OFFERS
                      <div className="dropdown show custom-drop">
                        <a
                          className="btn btn-secondary dropdown-toggle"
                          href={void 0}
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          // onClick={this.openDropdown}
                        >
                          <img className="" src="/assets/img/drop-icon.png" />{" "}
                          {/* {this.state.dropdownValue} */}
                          Advance Search
                        </a>

                        <div
                          className={`dropdown-menu`}
                          aria-labelledby="dropdownMenuLink"
                        >
                          <a
                            className="dropdown-item"
                            href={void 0}
                            // onClick={() => this.requestmylisting("")}
                          >
                            Open
                          </a>
                          <a
                            className="dropdown-item"
                            href={void 0}
                            // onClick={() =>
                            //   this.requestmylisting("Complete")
                            // }
                          >
                            Complete
                          </a>
                        </div>
                      </div>
                    </h2>
                  </div>
                  {this.props.offerDetails.offerlist &&
                  this.props.offerDetails.offerlist.length !== 0 ? (
                    
                      this.props.offerDetails.offerlist.map((val, index) => (
                        <div
                          className="content-part-wrapper profile-content-part-wrapper list-pre"
                          key={index}
                        >
                          <div className="content-part-wrapper dark-part position-relative mylist-adjust">
                            <div className="row">
                              <div className="col-sm-8">
                                <p>{val.city}</p>
                                <p className="ohters-color">
                                  Type&nbsp;-&nbsp;
                                  <span className="ohters-color2">
                                    {val.type}
                                  </span>
                                </p>
                              </div>
                              <div className="col-sm-4 text-right">
                                <h2 className="card-amount">
                                  {val.listing_status}
                                </h2>
                                <p className="ohters-color3">
                                  $ {val.card_owner_amount}
                                </p>
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
                                    {val.date}
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
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="profile2-list-txt ohters-color2">
                                    {val.time}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row d-flex align-items-center">
                              <div className="col-sm-8">
                                <div className="item user-block  d-flex align-items-center">
                                  <div className="">
                                    <div className="user-block-status">
                                      {val.brokers_profile_photo != "" ? (
                                        <img
                                          className="rounded-circle"
                                          src={val.brokers_profile_photo}
                                          alt="Avatar"
                                          style={{
                                            width: "40px",
                                            height: "40px",
                                          }}
                                        />
                                      ) : (
                                        <div className="small-profile-alpha text-center">
                                          {val.brokers_name.charAt(0)}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="profile2-list-txt ohters-color2">
                                    Listed by:
                                    <br />
                                    <p className="ohters-color4">
                                      {val.brokers_name}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 text-right">
                                <img
                                  src="/assets/img/error.png"
                                  className="text-right"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="row">No Record Found</div>
                  )}
                </div>
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
    nowchangeview: state.listingactiveview.activelistingview,
    currentUserDetails: state.login.user,
    offerDetails: state.searchdetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestOfferlisting: bindActionCreators(requestOfferlisting, dispatch),
    changeView: bindActionCreators(changeView, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searching);
