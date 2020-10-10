import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import HeaderUser from '../HeaderUser';
import Menu from '../Menu';
import Footer from '../Footer';
import { dashboardRequest } from "../../../actions/web/dashboardAction";
import { setPublicIP } from "../../../helpers/authHelper";
import Rate from "./rating";


class Dashboard extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
	this.state = {
		notification : [],
		profilesec   : {},
		listing	     : []
	}

  }
 
    componentDidMount(){
         
		this.props.dashboardRequest();
	}

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
		this.setState({
			notification : nextProps.dasboarddetail.list,
			profilesec	 : nextProps.dasboarddetail.my_profile_details,
			listing		 : nextProps.dasboarddetail.my_list,
		})
	}
  
 

   render() {
	let profile = this.state.profilesec || {};
	let notificationlist = this.state.notification || [];
	let list = this.state.listing || [];

	let rating = 3;
	let blank_rating = (5 - 3); 
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
													<img className="img-thumbnail rounded-circle" src={profile.profile_photo} alt={profile.first_name} width="80" height="80"/>
													: <img className="img-thumbnail rounded-circle" src={"assets/img/user/02.jpg"} alt="Avatar" width="80" height="80"/>
												}
											</div>

										</div>
											<p className="user-name">{profile.first_name} {profile.last_name}</p>
											<div className="user-info-wrapper">
											<p>
												<Rate />
												<img className="" src={"assets/img/star-icon.png"} />
											</p>
											<p className="user-address">{profile.brokerage_name}
												{profile.street_name},
												{profile.city},
												<a href="">{profile.phone}</a>
												<a href="">{profile.email}</a>
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
										  (notificationlist).map((item) => {
											return (
												<div className="content-part-wrapper light-part">
													<div className="row dashboard-loop">
														<div className="col-sm-9 d-flex align-items-center">
															<div className="user-block-picture custom-user-block-picture">
															<div className="user-block-status">

																	{	(item.sender_profile_photo != '') ? 
																		<img className="img-thumbnail rounded-circle" src={item.sender_profile_photo} alt={item.sender_name} width="80" height="80"/>
																		: <img className="img-thumbnail rounded-circle" src={"assets/img/user/02.jpg"} alt="Avatar" width="80" height="80"/>
																	}
															</div>
														</div>
															<div className="secend-block">
															<p className="user-name">{item.sender_name}</p>
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
									<h2 className="mid-heading">my listing <a href="">View All</a></h2>
									{ 
										  (list).map((item2) => {
											return (
												<div className="content-part-wrapper dark-part">
													<h2 className="card-amount">$ {item2.offer_amount}</h2>
													<p className="ohters-color">Due in 24 days</p>
													<p className="ohters-color2">{item2.date}</p>
													<p className="ohters-color2">{item2.time}</p>
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
		dashboardRequest : bindActionCreators(dashboardRequest , dispatch),
	  
	}
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

