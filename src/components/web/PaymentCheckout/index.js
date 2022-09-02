import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderUser from "../HeaderUser";
import Menu from "../Menu";
import { changeView } from "../../../actions/web/listingAction";
import PaymentCheckoutPreviewForm from "./previewForm"
import PaymentCheckoutPreview from './preview'
class PaymentCheckout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.match.params.section === "makepayment", "Checkout");
    return (
      <div className="wrapper">
        <HeaderUser />
        <Menu />

        <section className="section-container">
          <div className="content-wrapper">
            <div className="container gapfrm-top">
              {this.props.match.params.section === "makepayment" ? (
                <PaymentCheckoutPreview
                  history={this.props.history}
                  location={this.props.location}
                  match={this.props.match}
                />
              ) : (
                <PaymentCheckoutPreviewForm
                  history={this.props.history}
                  location={this.props.location}
                  match={this.props.match}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserDetails: state.login.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: bindActionCreators(changeView, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentCheckout);
