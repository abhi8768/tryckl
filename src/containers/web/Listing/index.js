import React, {Component} from 'react';
import { connect } from 'react-redux';
import ListingContainer from "../../../components/web/Listing";
import { decrypt } from "../../../helpers/CryptoJs";

class Listing extends Component {
  
  constructor(props){
   
    super(props);
    this.state = {
      brokerId  : (this.props.match.params.id != undefined) ? decrypt(this.props.match.params.id) : '',
    };
    
  }
  componentDidMount() {
  
    
  }
  render() {
   
    return (
     
       <ListingContainer />
     
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
)(Listing);
