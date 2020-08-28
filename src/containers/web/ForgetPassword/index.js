import React, {Component} from 'react';
import { connect } from 'react-redux';
import ForgetPasswordContainer from "../../../components/web/ForgetPassword";

class ForgetPassword extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  
  }
  render() {
   
    return (
     
        
        <ForgetPasswordContainer/>
     
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
)(ForgetPassword);
