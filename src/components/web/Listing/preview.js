import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import {ToastsStore} from 'react-toasts';

import { fetchMasterData } from "../../../actions/web/masterAction";
import $$ from 'jquery';
import MAP from './map_autocomplete';
import Datepicker from './datepicker';
import Timepicker from './timepicker';
import  MyCardPreview  from "./mycardpreview";


class ListingPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword        : [],
      currentview    : 'mylisting',
      mls            : [],
      mlsdetail      : [{mlsid : '', mlslink : ''}]
    }
    this.updatePicture = this.updatePicture.bind(this);
    this.handleDelete  = this.handleDelete.bind(this);
    this.handleChange  = this.handleChange.bind(this);
    this.handleEnter   = this.handleEnter.bind(this);
    this.addRow        = this.addRow.bind(this);
  }
 
  componentDidMount(){ 
    $$("#menu_profile").addClass('active');
    let param = {
      type               : 'MLS',
      search_param       : null,
      logged_in_brokerid : this.props.currentUserDetails.brokers_id
    }
    this.props.fetchMasterData(param);
  }
  
  updatePicture(e){
   // this.props.updateprofilePicture({ image : e.target.files[0] });
  }

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    this.setState({
      mls : nextProps.listmls
    })
  }
  
  handleDelete(){

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleEnter(e){
      var keywords = this.state.keyword;
      if(e.key === "Enter"){
          e.preventDefault(); // Ensure it is only this code that runs
          
          if(e.target.value != ''){
              keywords.push(e.target.value);
              this.setState({
                  [e.target.name]: keywords,
              });
              $$("#keyword").val("");
          }
      }
  }
  addRow(){
   let rows = this.state.mlsdetail;
   if(this.state.mlsdetail.length < 5){
      rows.push({mlsid : '', mlslink : ''});
      this.setState({
        mlsdetail : rows
      })
   }else{
     ToastsStore.error('Maximum option exit');
   }
     
  }

  render() {
     
    return (
        <div className="row">
             <MyCardPreview />
            <div className="col-lg-6">
                <div className="content-part-wrapper profile-content-part-wrapper">
                  <div className="content-part-wrapper">
                    <h2 className="mid-heading">LISTing</h2>
                    <div className="content-part-wrapper profile-content-part-wrapper list-pre">
                <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Type</p>
              <p className="ohters-color2">Showing</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Keyword</p>
              <p className="ohters-color2">Showing</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Property Address</p>
              <p className="ohters-color2">123, Main Street,Secremento, Anyvilla, YZ 12345</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative custom-height">
              <p className="ohters-color">Map VIEW</p>
             
              <img src="img/map.png" className="img-fluid position-absulute mt-3" />
            </div>

              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">MLS</p>
              <p className="ohters-color2 mt-3">Sample MLS 1 <span className="float-right"> <img src="img/www-img.png" /></span></p>
              <div className="clearfix"></div>
              <p className="ohters-color2 mt-3">Sample MLS 2 <span className="float-right"> <img src="img/www-img.png" /></span></p>
               <div className="clearfix"></div>
              <p className="ohters-color2  mt-3">Sample MLS 3 <span className="float-right"> <img src="img/www-img.png" /></span></p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Date</p>
              <p className="ohters-color2">Thursday / July 15, 2020</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Time</p>
              <p className="ohters-color2">05:45 pm</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Access Type</p>
              <p className="ohters-color2">Supra - CBS Req’d</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Instruction for Agent</p>
              <p className="ohters-color2">Simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled 
                it to make a type specimen book.</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Client Name</p>
              <p className="ohters-color2">Max Walter</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Client Number</p>
              <p className="ohters-color2">(236)487-1546</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Offer Amount</p>
              <p className="ohters-color2">$ 1,588</p>
             
            </div>
            <button className="sv-btn">SUBMIT</button>
            <button className="sv-btn">BACK</button>
              </div>
                      </div>   
                      </div>  
                    </div>
              
                 <div className="col-lg-3">
                </div>
            </div>
        
      
	 );
  }
}

const mapStateToProps = state => {
 	return {
    changeview          : state.profileactiveview.activeview,
    currentUserDetails  : state.login.user,
    listmls             : state.mastermls.mastermls
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
        fetchMasterData   : bindActionCreators(fetchMasterData , dispatch),
        //currentActiveView : bindActionCreators(currentActiveView , dispatch),
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingPreview);

