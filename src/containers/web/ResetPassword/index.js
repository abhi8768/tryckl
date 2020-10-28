import React, {Component} from 'react';
import { connect } from 'react-redux';
import ResetPasswordContainer from "../../../components/web/ResetPassword";
const Cryptr = require('cryptr');
const cryptr = new Cryptr('tryckl!@2020Webdevelopement');

class ResetPassword extends Component {
  constructor(props){
    super(props);
    
    const decryptedString = cryptr.decrypt(this.props.match.params.id);

    this.state = {
      brokerId  : (this.props.match.params.id != undefined) ? decryptedString : '',
    };
  }
  componentDidMount() {
  
  }
  render() {
   
    return (
     
        
        <ResetPasswordContainer brokerId = { this.state.brokerId}/>
     
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
)(ResetPassword);
