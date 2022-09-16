import React, { Component } from "react";
import { connect } from "react-redux";
import BankAddsub from "../../../components/web/BankAddsub";

class BankAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    console.log(this.props, "props");
    return <BankAddsub />;
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

export default connect(mapStateToProps, mapDispatchToProps)(BankAddComponent);
