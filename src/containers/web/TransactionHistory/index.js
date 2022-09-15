import React, { Component } from "react";
import { connect } from "react-redux";
import Transactionhistorysub from "../../../components/web/TransactionHistorySub";

class TransactionHistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {}

  render() {
    console.log(this.props, "props");
    return (
      <Transactionhistorysub
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //stateNames: state.signup
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistoryComponent);
