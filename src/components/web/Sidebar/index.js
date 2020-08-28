import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {withRouter} from "react-router-dom";

import {createLogoutRequest} from "../../actions/logoutAction";
import { changeTab } from "../../actions/userAction"
import { encrypt , decrypt } from "../../../helpers/CryptoJs";
import './Sidebar.css';

class Sidebar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
      
    
    }
    componentDidMount(){
        
    }

   
    
    UNSAFE_componentWillReceiveProps(nextProps){ 
        
    }

   

    render() {
       
        return (<div></div>);
    }
}

const mapStateToProps = state => {

    return {
           
           }
  }
  const mapDispatchToProps = dispatch => {
    return {
     
    }
  }
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
