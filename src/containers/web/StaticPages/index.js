import React, {Component} from 'react';
import { connect } from 'react-redux';
import StaticPagesContainer from "../../../components/web/StaticPages";

class StaticPages extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  
    
  }
  render() {
   
    return (
     
        <StaticPagesContainer />
       
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
)(StaticPages);

