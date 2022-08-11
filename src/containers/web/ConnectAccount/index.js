import React, { Component } from "react";
import { connect } from "react-redux";
import ConnectAccountContainer from "../../../components/web/ConnectAccount";

class ConnectAccount extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <ConnectAccountContainer
        history={this.props.history}
        location={this.props.location}
        match={this.props.match}
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectAccount);
