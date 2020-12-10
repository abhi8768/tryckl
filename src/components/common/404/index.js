import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./errorPage.css";

class NotFound extends Component {

   componentDidMount(){
   

   }

    backButton() {
      window.history.back();
    }
    render() {
   
      return (
      <div className="container">
      <div className="row">
          <div className="col-lg-12">
             
          </div>
        <div className="col-lg-12 text-center notfound_msg">
            
            <div className="notfound_div">Error : 404 !</div>
            <div className="notfound_head">Page Not Found</div>
            <button className="notfound_btn" onClick={this.backButton.bind(this)}>Back</button>
        </div>
        </div>
        </div>
      );
    }
  }
export default NotFound;