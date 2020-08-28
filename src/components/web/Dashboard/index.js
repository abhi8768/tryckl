import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import HeaderUser from '../HeaderUser';
import Menu from '../Menu';
import Footer from '../Footer';
import { notificationRequest } from "../../../actions/web/notificationAction";
import { setPublicIP } from "../../../helpers/authHelper";


class Dashboard extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
	this.state = {
		list : []
	}

  }
 
    componentDidMount(){
         
	this.props.notificationRequest();
	}

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
		//console.log(nextProps.notificationlist);
		this.setState({
			list : nextProps.notificationlist
		})
	}
  
 

   render() {
	
    return (
		<div className="wrapper theme-2-active navbar-top-light horizontal-nav">
				<HeaderUser />
				<Menu />
				<div className="page-wrapper">
					<div className="container">
						<div className="row heading-bg">
							<div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
								<h5 className="txt-dark">Dashboard</h5>
							</div>
						</div>
						<div className="row">
							<aside className="col-lg-12 col-md-8 pl-0">
								<div className="panel panel-refresh pa-0">
									<div className="refresh-container">
										<div className="la-anim-1"></div>
									</div>
									
									<div className="panel-wrapper collapse in">
										<div className="panel-body inbox-body pa-0">
											<div className="table-responsive mb-0">
												<table className="table table-inbox table-hover mb-0">
													<tbody>
														{   (this.state.list.length > 0) ?
															
																(this.state.list).map((listitem,index) => {
																	return(
																	<tr className="" key={index}>
																	<td className="inbox-small-cells">
																		<div className="checkbox checkbox-default inline-block">
																			<img width="50px" height="50px" src={listitem.sender_profile_photo} alt="user_auth" className="user-auth-img img-circle"></img>
																		</div>
																		{/* <i className="zmdi zmdi-star inline-block font-16"></i> */}
																	</td>
																	<td className="view-message  dont-show">{listitem.sender_name}</td>
																	<td className="view-message ">{listitem.notification_description} <b> {listitem.group_name}</b></td>
																	<td className="view-message  text-right">
																		
																		<span  className="time-chat-history inline-block">{listitem.posted_at}</span>
																	</td>
																</tr>
																)
															})
															: null
														}
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</aside>
						</div>
					</div>
				<Footer />
				</div>
		
		
    	</div>
    );
  }
}

const mapStateToProps = state => {
	return {
	  notificationlist  : state.notificationlist.notification,
	 
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
		notificationRequest       : bindActionCreators(notificationRequest , dispatch),
	  
	}
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

