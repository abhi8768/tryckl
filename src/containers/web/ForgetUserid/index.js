import React, {Component} from 'react';
import { connect } from 'react-redux';
import ForgetUseridContainer from "../../../components/web/ForgetUserid";

class ForgetUserid extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  
  }
  render() {
   
    return (
     
        
        <ForgetUseridContainer/>
     
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
)(ForgetUserid);