import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";


import { requestMylisting } from "../../../actions/web/listingAction";
import $$ from 'jquery';



class MyCardPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
        mycardpreview  : []
    }
   
  }
 
  componentDidMount(){ 
   
    this.props.requestMylisting();
  }
  


	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    this.setState({
        mycardpreview : nextProps.mylisting.list
    })
  }
  


  
  render() {
     
    return (
        <div className="col-lg-3">
        <div className="content-part-wrapper">
            <h2 className="mid-heading">my cards <a href="">View All</a></h2>
            { (this.state.mycardpreview).map((item,index) => {
              return(
                (index < 3) ?
                
                  <div className="content-part-wrapper dark-part position-relative" key={`preview_${index}`}>
                      {(item.due_day != "") ? 
                         <img src="/assets/img/error.png" className="right-posi" />
                        : null
                      }
                      <h2 className="card-amount">$ {item.offer_amount}</h2>
                      {(item.due_day != "") ? 
                        <p className="ohters-color">Due in {item.due_day} days</p>
                        : null
                      }
                      <p className="ohters-color2">{item.date}</p>
                      <p className="ohters-color2">{item.time}</p>
                  </div>
                
                : null )
              })
            }
            {/* <div className="content-part-wrapper dark-part position-relative">
            <img src="/assets/img/error.png" className="right-posi" />
                <h2 className="card-amount">$ 100</h2>
                <p className="ohters-color">Due in 24 days</p>
                <p className="ohters-color2">Thursday / July 15, 2020</p>
                <p className="ohters-color2">05:45 pm</p>
            </div>
            <div className="content-part-wrapper dark-part position-relative">
                <h2 className="card-amount">$ 100</h2>
                <p className="ohters-color">Due in 24 days</p>
                <p className="ohters-color2">Thursday / July 15, 2020</p>
                <p className="ohters-color2">05:45 pm</p>
            </div>
            <div className="content-part-wrapper dark-part position-relative">
                <h2 className="card-amount">$ 100</h2>
                <p className="ohters-color">Due in 24 days</p>
                <p className="ohters-color2">Thursday / July 15, 2020</p>
                <p className="ohters-color2">05:45 pm</p>
            </div> */}
        </div>
    </div>

      
	 );
  }
}

const mapStateToProps = state => {
 
 	return {
      mylisting : state.mylisting.mylisting
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
        requestMylisting : bindActionCreators(requestMylisting , dispatch),
    
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCardPreview);

