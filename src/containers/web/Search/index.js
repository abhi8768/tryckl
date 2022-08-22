import React, { Component } from "react";
import { connect } from "react-redux";
import SearchingContainer from "../../../components/web/Search";
import { decrypt } from "../../../helpers/CryptoJs";

class SearchComponent extends Component {
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
    console.log(this.props,"props")
    return (
      <SearchingContainer
        history={this.props.history}
        location={this.props.location}
        match={this.props.match}
        brokerId={this.state.brokerId}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
