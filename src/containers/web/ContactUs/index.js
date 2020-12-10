import React, {Component} from 'react';
import { connect } from 'react-redux';
import ContactUsContainer from "../../../components/web/ContactUs";

class ContactUs extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  
  }
  render() {
   
    return (
     
        
        <ContactUsContainer/>
     
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
)(ContactUs);
