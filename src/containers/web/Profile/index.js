import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProfileContainer from "../../../components/web/Profile";

class Profile extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  
    
  }
  render() {
   
    return (
     
       
                                
        <ProfileContainer/>
     
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
)(Profile);
