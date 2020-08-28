import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


const Footer = (props) => {
  return(
  	<footer className="footer pl-30 pr-30">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<p>2020 &copy; TRYCKL</p>
						</div>
						<div className="col-sm-6 text-right">
							<p>Follow Us</p>
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-google-plus"></i></a>
						</div>
					</div>
				</div>
			</footer>
);
}
export default Footer;