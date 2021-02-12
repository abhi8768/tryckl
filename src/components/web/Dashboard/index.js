import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
/* import ReactStars from "react-rating-stars-component"; */
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

import {encrypt} from "../../../helpers/CryptoJs";
import HeaderUser from '../HeaderUser';
import Menu from '../Menu';
import { dashboardRequest } from "../../../actions/web/dashboardAction";
import { listinginLocalStorage } from "../../../actions/web/listingAction";
import $$ from 'jquery';
import "./dashboard.css";



class Dashboard extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
	this.state = {
		notification : [],
		profilesec   : {},
		listing	     : [],
		rating       : 0
	}
	this.gotoDetail = this.gotoDetail.bind(this);

  }
 
    componentDidMount(){
		//localStorage.removeItem('login');
		$$("#home-header-icon").addClass('active');
		this.props.dashboardRequest();
	}

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
		this.setState({
			notification : nextProps.dasboarddetail.list,
			profilesec	 : nextProps.dasboarddetail.my_profile_details,
			listing		 : nextProps.dasboarddetail.my_list,
			rating		 : Number(nextProps.dasboarddetail.my_profile_details.rating),
		})
	}
  
	gotoDetail(listing_id){
		this.props.listinginLocalStorage(`detaillisting/${listing_id}`);
		this.props.history.push(`detail-listing/${encrypt(listing_id)}`);
	}

   render() {
	let profile = this.state.profilesec || {};
	let notificationlist = this.state.notification || [];
	let list = this.state.listing || [];

    return (
		<div className="wrapper">
			<HeaderUser />
			<Menu />

			<section className="section-container">
         
				<div className="content-wrapper">
				
					<div className="container gapfrm-top">
						<div className="row">
							<div className="col-lg-3">
								<div className="content-part-wrapper text-center">
									<div className="item user-block user-part">
										
										<div className="user-block-picture custom-user-block-picture">
											<div className="user-block-status">
												{
													(profile.profile_photo != '') ? 
													<img className="img-thumbnail rounded-circle dashboard-thumbnail" src={profile.profile_photo} alt={profile.first_name} />
													: <img className="img-thumbnail rounded-circle" src={"assets/img/user/02.jpg"} alt="Avatar" />
												}
											</div>

										</div>
											<p className="user-name">{profile.first_name} {profile.last_name}</p>
											<div className="user-info-wrapper">
												<div style={{marginLeft: '5px'}}>  
												
													
													<StarRatings
														rating={this.state.rating}
														starRatedColor="#00FFFF"
													/*   changeRating={this.changeRating} */
														numberOfStars={5}
														name='rating'
														starDimension="20px"
														starSpacing="2px"
													/>
												</div>
                                       
											<p className="user-address">{profile.brokerage_name}
												{profile.street_name},
												{profile.city},
												<a href={`skype: ${profile.phone}`}>{profile.phone}</a>
												<a href={`mailto: ${profile.email}`} className="a_tag">{profile.email}</a>
												{profile.license_issuing_state_code} Lic. #{profile.license_no}
											</p>

										</div>
										</div>
								</div>
								{/* <div className="content-part-wrapper left-content-small-pic">
									<h2 className="mid-heading">my cards <a href="">View All</a></h2>
									<div className="content-part-wrapper dark-part">
										<div className="row dashboard-loop">
										<div className="col-sm-12 d-flex align-items-center">
											<div className="user-block-picture custom-user-block-picture align-items-center">
											<div className="user-block-status">
												<img className="img-thumbnail rounded-circle" src="assets/img/user/02.jpg" alt="Avatar" width="80" height="80" />
											</div>
										</div>
											<div className="secend-block">
											<p className="user-name">Damonvvv Luke</p>
											<p className="user-name-card">16 Members</p>
										</div>
										</div>
										
									</div>
									</div>
									<div className="content-part-wrapper dark-part">
											<div className="row dashboard-loop">
										<div className="col-sm-12 d-flex align-items-center">
											<div className="user-block-picture custom-user-block-picture">
											<div className="user-block-status">
												<img className="img-thumbnail rounded-circle" src="assets/img/user/02.jpg" alt="Avatar" width="80" height="80" />
											</div>
										</div>
											<div className="secend-block">
											<p className="user-name">Damon Luke</p>
											<p className="user-name-card">Won a card!</p>
										</div>
										</div>
										
									</div>
									</div>
									<div className="content-part-wrapper dark-part">
											<div className="row dashboard-loop">
										<div className="col-sm-12 d-flex align-items-center">
											<div className="user-block-picture custom-user-block-picture">
											<div className="user-block-status">
												<img className="img-thumbnail rounded-circle" src="assets/img/user/02.jpg" alt="Avatar" width="80" height="80" />
											</div>
										</div>
											<div className="secend-block">
											<p className="user-name">Damon Luke</p>
											<p className="user-name-card">Won a card!</p>
										</div>
										</div>
										
									</div>
									</div>
								</div>
								<div className="content-part-wrapper">
									<h2 className="mid-heading">my cards <a href="">View All</a></h2>
									<div className="content-part-wrapper dark-part">
										<h2 className="card-amount">$ 100</h2>
										<p className="ohters-color">Due in 24 days</p>
										<p className="ohters-color2">Thursday / July 15, 2020</p>
										<p className="ohters-color2">05:45 pm</p>
									</div>
									<div className="content-part-wrapper dark-part">
										<h2 className="card-amount">$ 100</h2>
										<p className="ohters-color">Due in 24 days</p>
										<p className="ohters-color2">Thursday / July 15, 2020</p>
										<p className="ohters-color2">05:45 pm</p>
									</div>
									<div className="content-part-wrapper dark-part">
										<h2 className="card-amount">$ 100</h2>
										<p className="ohters-color">Due in 24 days</p>
										<p className="ohters-color2">Thursday / July 15, 2020</p>
										<p className="ohters-color2">05:45 pm</p>
									</div>
								</div>
								
 */}
									
							</div>
							<div className="col-lg-6">
								<div className="content-part-wrapper">
									<h2 className="mid-heading">Your dashboard</h2>
									{ 
										  (notificationlist).map((item,index) => {
											let letterImage = item.sender_name.charAt(0);
											return (
												<div className="content-part-wrapper light-part" key={`notification${index}`}>
													<div className="row dashboard-loop">
														<div className="col-sm-9 d-flex align-items-center">
															<div className="user-block-picture custom-user-block-picture">
															<div className="user-block-status">
																{	(item.sender_profile_photo != '') ? 
																	<img className="img-thumbnail rounded-circle" src={item.sender_profile_photo} alt={item.sender_name} style={{width:'80px', height : '80px'}}/>
																	:  <div className="small-profile-alpha text-center">{letterImage}</div> 
																}
															</div>
														</div>
															<div className="secend-block">
															<p className="user-name"><Link to={`/profile/${encrypt(item.notification_from_broker_id)}`} >{item.sender_name}</Link></p>
															<p className="user-name-card">{item.notification_description}</p>
														</div>
														</div>
														<div className="col-sm-3 d-flex align-items-center text-right">
																<p className="calculation">{item.posted_at}</p>
														</div>
													</div>
												</div>
								
											)
										})
									}
								</div>
						</div>
							<div className="col-lg-3">
								<div className="content-part-wrapper">
									
									<h2 className="mid-heading">my listings <Link to="/my-listing">View All</Link></h2>
									{ 
										  (list).map((item2,index) => {
											
											let due_status = '';
											if(item2.due_day != ''){
											  if(item2.due_day != "0"){
												due_status = `Due in ${item2.due_day} days`;
											  }else{
												due_status = `Due today`;
											  }
											}else{
											  if(item2.listing_status == "ACCEPTED"){
												due_status = `IN PROGRESS`;
											  }else if(item2.listing_status == "COMPLETED"){
												if(item2.payment_status == "0"){
												  due_status = `IN REVIEW`;
												}else{
												  due_status = `COMPLETED`;
												}
											  }else if(item2.listing_status == "OVERDUE"){
												due_status = `OVERDUE`;
											  }else{
							
											  }
											}
											return (
												<div className="content-part-wrapper dark-part" key={`mylist${index}`} onClick={()=>this.gotoDetail(item2.listing_id)}>
													
													<h2 className="card-amount">{item2.type == 'Open House' ? 'leads' : `$ ${item2.offer_amount}`} 
													{
														(item2.listing_status == 'OVERDUE') ?
															<img src="/assets/img/error.png" className="right-position" />
														
														: null
													}	
													</h2>
													<p className="ohters-color">{due_status}</p>
													<p className="ohters-color2">{item2.type}</p>
													{
														(item2.keyword != '') ? 
														<p className="ohters-color2">{item2.keyword}</p>
														: null
													}
                       
													<p className="ohters-color2">{item2.date} &nbsp; {item2.time}</p>
																								
												
												</div>
											)  
										  })
									}							
								</div>
								
								{/* <div className="content-part-wrapper text-center">
									<h2 className="mid-heading">Your dashboard</h2>
									<img className="img-fluid" src="assets/img/round-graph.png" />
								</div>
								<div className="content-part-wrapper">
									<h2 className="mid-heading">my cards <a href="">View All</a></h2>
									<div className="content-part-wrapper dark-part">
										<h2 className="card-amount">$ 100</h2>
										<p className="ohters-color">Due in 24 days</p>
										<p className="ohters-color2">Thursday / July 15, 2020</p>
										<p className="ohters-color2">05:45 pm</p>
									</div>
									<div className="content-part-wrapper dark-part">
										<h2 className="card-amount">$ 100</h2>
										<p className="ohters-color">Due in 24 days</p>
										<p className="ohters-color2">Thursday / July 15, 2020</p>
										<p className="ohters-color2">05:45 pm</p>
									</div>
									<div className="content-part-wrapper dark-part">
										<h2 className="card-amount">$ 100</h2>
										<p className="ohters-color">Due in 24 days</p>
										<p className="ohters-color2">Thursday / July 15, 2020</p>
										<p className="ohters-color2">05:45 pm</p>
									</div>
								</div>
 */}

								</div>
						</div>
					</div>
				
				</div>
      		</section>
		</div>
	 );
  }
}

const mapStateToProps = state => {
	return {
	  dasboarddetail  : state.dashboarddetail.dashboard,
	 
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
		dashboardRequest      : bindActionCreators(dashboardRequest , dispatch),
		listinginLocalStorage : bindActionCreators(listinginLocalStorage , dispatch),
	  
	}
  }

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard));

