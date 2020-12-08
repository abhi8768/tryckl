import React, {Component} from 'react';
import { connect } from 'react-redux';
import ConnectAccountContainer from "../../../components/web/ConnectAccount";

class ConnectAccount extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  
    
  }
  render() {
   
    return (
     <ConnectAccountContainer />
     
    );
  }
}

const mapStateToProps = state => {
  return {
    //stateNames: state.signup
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectAccount);
