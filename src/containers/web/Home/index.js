import React, {Component} from 'react';
import { connect } from 'react-redux';
import HomeContainer from "../../../components/web/Home";

class Home extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  
  }
  render() {
   
    return (
     
        <HomeContainer/>
     
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
)(Home);
