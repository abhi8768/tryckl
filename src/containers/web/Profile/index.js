import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileContainer from "../../../components/web/Profile";
import { decrypt } from "../../../helpers/CryptoJs";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brokerId:
        this.props.match.params.id != undefined
          ? decrypt(this.props.match.params.id)
          : "",
    };
  }
  componentDidMount() {}
  render() {
    return (
      <ProfileContainer
        brokerId={this.state.brokerId}
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
