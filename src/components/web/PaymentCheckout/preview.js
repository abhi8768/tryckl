import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { ToastsStore } from "react-toasts";

import { encrypt, decrypt, getParams } from "../../../helpers/CryptoJs";
import {
  requestDetaillisting,
  listinginLocalStorage,
  checkListingStatusForCancel,
  acceptOffer,
  agentfundtransfer,
  getCompleteCarddetails,
  cleardwollafundSuccess,
} from "../../../actions/web/listingAction";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./paymentcheckout.css";

class PaymentCheckoutPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingid:
        this.props.match.params != undefined
          ? decrypt(this.props.match.params.id)
          : null,
      detail: {},
      files: null,
      modal: false,
      saved_payment_method: "",
      saved_card_details: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCompleteCarddetails({ listing_id: this.state.listingid });
  }

  UNSAFE_componentWillReceiveProps(nextProps, prevProps, prevState) {
    if (
      prevProps.paymenttransfer !==
        nextProps.paymenttransfer &&
      nextProps.paymenttransfer === true
    ) {
      nextProps.cleardwollafundSuccess();
      ToastsStore.success("Payment Done Successfully");
      nextProps.history.push("/my-listing");
    }
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    
      this.props.agentfundtransfer({
        listing_id:
          this.props.completecarddetails.completecarddetaillisting.listing_id,
        receiver_id:
          this.props.completecarddetails.completecarddetaillisting
            .card_owner_id,
      });
    
  }


  render() {
    console.log(this.props, "props");
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="content-part-wrapper profile-content-part-wrapper">
            <div className="content-part-wrapper">
              <h2 className="mid-heading">PAY REQUEST</h2>
              {this.props.completecarddetails.completecarddetaillisting !==
                null && (
                <div className="content-part-wrapper profile-content-part-wrapper list-pre">
                  <div className="content-part-wrapper dark-part position-relative">
                    {/* <p className="ohters-color">Take Image & Upload</p> */}
                    <img
                      src={
                        this.props.completecarddetails.completecarddetaillisting
                          .complete_image
                      }
                      className="paid-image"
                      alt=""
                    />
                  </div>
                  <div className="content-part-wrapper dark-part position-relative">
                    <p className="ohters-color">Image Location: </p>
                    <p className="text-white">
                      {
                        this.props.completecarddetails.completecarddetaillisting
                          .address
                      }
                    </p>
                    <p className="ohters-color">Date Created: </p>
                    <p className="text-white">
                      {
                        this.props.completecarddetails.completecarddetaillisting
                          .completed_at
                      }
                    </p>
                  </div>
                  <div className="content-part-wrapper dark-part position-relative">
                    <p className="ohters-color">Notes For Agent</p>

                    <p className="text-white">
                      {
                        this.props.completecarddetails.completecarddetaillisting
                          .agent_instruction
                      }
                    </p>
                  </div>

                  <div className="content-part-wrapper dark-part position-relative">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.ischecked}
                          onChange={(e) =>
                            this.handleChange("ischecked", e.target.checked)
                          }
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="I am satisfied with the work done"
                    />
                  </div>

                  <button
                    className={`sv-btn ${
                      this.state.ischecked ? "" : "sv-btn-disabled"
                    }`}
                    id="cancel-listing"
                    disabled={!this.state.ischecked}
                    onClick={() => {
                      this.handleSubmit();
                    }}
                  >
                    Pay Agent
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    changeview: state.profileactiveview.activeview,
    currentUserDetails: state.login.user,
    detail: state.listingdetail.detaillisting,
    acceptlistflag: state.listingdetail.acceptflag,
    returnlistflag: state.listingdetail.returnflag,
    nowchangeview: state.listingactiveview.activelistingview,
    cancelStatus: state.listingcancelstatus.statuslistingcancel,
    nopaycancel: state.cacellistingwithoutpay.nopaycancellisting,
    withpaycancel: state.cacellistingwithpay.withpaycancellisting,
    paymentrequestflag: state.paymentrequest.paymentrequestsuccessflag,
    completecarddetails: state.completecarddetails,
    paymenttransfer: state.paymenttransfer.paymentdonesuccessflag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestDetaillisting: bindActionCreators(requestDetaillisting, dispatch),
    acceptOffer: bindActionCreators(acceptOffer, dispatch),
    listinginLocalStorage: bindActionCreators(listinginLocalStorage, dispatch),
    checkListingStatusForCancel: bindActionCreators(
      checkListingStatusForCancel,
      dispatch
    ),
    getCompleteCarddetails: bindActionCreators(
      getCompleteCarddetails,
      dispatch
    ),
    agentfundtransfer: bindActionCreators(agentfundtransfer, dispatch),
    cleardwollafundSuccess: bindActionCreators(
      cleardwollafundSuccess,
      dispatch
    ),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaymentCheckoutPreview)
);
