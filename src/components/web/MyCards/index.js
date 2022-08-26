import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import HeaderUser from "../HeaderUser";
import Menu from "../Menu";
import {
  changeView,
  requestOfferlisting,
  listinginLocalStorage,
  requestMyCardlisting,
} from "../../../actions/web/listingAction";
import { encrypt } from "../../../helpers/CryptoJs";
import $$ from "jquery";
import { getAuthHeader } from "../../../helpers/authHelper";
import { handleResponse } from "../../../actions/utils";

class MyCards extends Component {
  constructor(props) {
    super(props);
    // setPublicIP();
    // this.fetchoffers = this.fetchoffers(this);
    this.gotoDetail = this.gotoDetail.bind(this);
  }

  componentDidMount() {
    this.props.requestMyCardlisting();
  }

  gotoDetail(listing_id) {
    this.props.listinginLocalStorage(`detaillisting/${listing_id}/true`);
    this.props.history.push(`detail-listing/${encrypt(listing_id)}/true`);
  }

  render() {
    console.log(this.props, "props");
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
                      My Card
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
                          Open
                        </a>
                      </div>
                    </h2>
                  </div>
                  {this.props.mycardlist.cardlist &&
                  this.props.mycardlist.cardlist.length !== 0 ? (
                    this.props.mycardlist.cardlist.map((val, index) => (
                      <div
                        className="content-part-wrapper profile-content-part-wrapper list-pre"
                        onClick={() => this.gotoDetail(val.listing_id)}
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
    mycardlist: state.mycardlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestMyCardlisting: bindActionCreators(requestMyCardlisting, dispatch),
    listinginLocalStorage: bindActionCreators(listinginLocalStorage, dispatch),
    changeView: bindActionCreators(changeView, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCards);
