import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginContainer from "../../../components/admin/Login";

class Login extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  
  }
  render() {
   
    return (
     
        
        <LoginContainer/>
     
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
)(Login);
