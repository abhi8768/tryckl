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
  nopayCancellisting,
  withpayCancellisting,
  paymentmethodListing,
  acceptOffer,
  clearacceptListSuccess,
  checkreturncardstatus,
  clearreturnListSuccess,
  paymentrequest,
  clearpaymentrequestSuccess,
} from "../../../actions/web/listingAction";
import Dropzone from "react-dropzone";
import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import "./paymentcheckout.css"

class PaymentCheckoutPreviewForm extends Component {
  constructor(props) {
    super(props);
    this.onDrop = (files) => {
      // console.log(files,"files")
      this.setState({ files: files[0] });
    };
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
      ischecked: false,
      agent_instruction: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }

  componentDidMount() {
    this.props.requestDetaillisting({ listing_id: this.state.listingid });
    // this.props.paymentmethodListing();
  }

  UNSAFE_componentWillReceiveProps(nextProps, prevProps, prevState) {
    if (
      prevProps.paymentrequestflag !== nextProps.paymentrequestflag &&
      nextProps.paymentrequestflag === true
    ) {
      
      nextProps.clearpaymentrequestSuccess();
      ToastsStore.success("Card Payment Requested Successfully");
      nextProps.history.push("/mycards");
    }
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    if (this.state.agent_instruction === "" && this.state.files === null) {
      ToastsStore.success("Please Fillup the Fields");
    } else {
      this.props.paymentrequest({
        listing_id: this.props.detail.listing_id,
        agent_instruction: this.state.agent_instruction,
        latitude: this.props.detail.property_latitude,
        longitude: this.props.detail.property_longitude,
        address: this.props.detail.property_address,
        image: this.state.files,
      });
    }
  }

  handleDisabled() {
    if (
      this.state.agent_instruction === "" ||
      this.state.files === null ||
      this.state.ischecked === false
    ) {
      return true;
    }
    return false;
  }

  render() {
    console.log(this.props, "props");
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="content-part-wrapper profile-content-part-wrapper">
            <div className="content-part-wrapper">
              <h2 className="mid-heading">Get Paid</h2>
              <div className="content-part-wrapper profile-content-part-wrapper list-pre">
                <div className="content-part-wrapper dark-part position-relative">
                  <p className="ohters-color">Take Image & Upload</p>
                  <Dropzone onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <section className="container">
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} />
                          {this.state.files !== null ? (
                            <img
                              src={URL.createObjectURL(
                                this.state.files || "{}"
                              )}
                              className="paid-image"
                              alt=""
                            />
                          ) : (
                            <p>
                              Drag 'n' drop some files here, or click to select
                              files
                            </p>
                          )}
                        </div>
                        {/* <aside>
                          <ul>{files}</ul>
                        </aside> */}
                      </section>
                    )}
                  </Dropzone>
                </div>
                <div className="content-part-wrapper dark-part position-relative">
                  <p className="ohters-color">Notes For Agent</p>
                  <TextField
                    id="standard-multiline-static"
                    multiline
                    rows={6}
                    onChange={(e) =>
                      this.handleChange("agent_instruction", e.target.value)
                    }
                    fullWidth
                  />
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
                    label="I completed all work requested on this card"
                  />
                </div>

                <button
                  className={`sv-btn ${
                    this.handleDisabled() ? "sv-btn-disabled" : ""
                  }`}
                  id="cancel-listing"
                  disabled={this.handleDisabled()}
                  onClick={() => {
                    this.handleSubmit();
                  }}
                >
                  Get Paid
                </button>
              </div>
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
    paymentrequest: bindActionCreators(paymentrequest, dispatch),
    clearpaymentrequestSuccess: bindActionCreators(
      clearpaymentrequestSuccess,
      dispatch
    ),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaymentCheckoutPreviewForm)
);
