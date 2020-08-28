import React, {Component} from 'react';
import { connect } from 'react-redux';
import DashboardContainer from "../../../components/web/Dashboard";

class Dashboard extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  
    
  }
  render() {
   
    return (
     
        
        <DashboardContainer/>
     
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
)(Dashboard);
