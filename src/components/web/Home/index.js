import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import "./home.css";

class Home extends Component {
  constructor(props){
    super(props);
  }
   componentDidMount(){
    

   }

    loginButton() {
      //console.log( this.props.history);
      this.props.history.push(`/agent-login`);
    }
    render() {
      
      return (
        <div className="container">
            <div className="row">
              <div className="col-lg-12">
                HOME PAGE
              </div>

              <div className="col-lg-12 text-center notfound_msg">
                  <button className="" onClick={this.loginButton.bind(this)}>Login</button>
              </div>
            </div>
        </div>
      );
    }
  }
export default withRouter(Home);