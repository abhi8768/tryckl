import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";


//import { requestMylisting } from "../../../actions/web/listingAction";
import $$ from 'jquery';



class MyCardPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mycardpreview  : []
    }
   
  }
 
  componentDidMount(){ 
    //console.log(this.props.mylisting.list);
   
  }
  


	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
   
  }
  


  
  render() {
  
    let mycardPreview = this.props.mylisting.list;
    return (
      
        <div className="col-lg-3">
        {
             ((mycardPreview).length > 0) ? 
                 <div className="content-part-wrapper">
           
            <h2 className="mid-heading">my listing</h2> :
            { (mycardPreview).map((item,index) => {
                let due_status = '';
                if(item.due_day != ''){
                  if(item.due_day != "0"){
                    due_status = `Due in ${item.due_day} days`;
                  }else{
                    due_status = `Due today`;
                  }
                }else{
                  if(item.listing_status == "ACCEPTED"){
                    due_status = `IN PROGRESS`;
                  }else if(item.listing_status == "COMPLETED"){
                    if(item.payment_status == "0"){
                      due_status = `IN REVIEW`;
                    }else{
                      due_status = `COMPLETED`;
                    }
                  }else if(item.listing_status == "OVERDUE"){
                    due_status = `OVERDUE`;
                  }else{

                  }
                }
              return(
                (index < 3) ?
                
                  <div className="content-part-wrapper dark-part position-relative" key={`preview_${index}`}>
                      {(item.due_day != "") ? 
                         <img src="/assets/img/error.png" className="right-posi" />
                        : null
                      }
                      <h2 className="card-amount">$ {item.offer_amount}</h2>
                       <p className="ohters-color">{due_status}</p>
                       <p className="ohters-color2">{item.date}</p>
                      <p className="ohters-color2">{item.time}</p>
                  </div>
                
                : null )
              })
            }

        </div>
          : null 
        }
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
      //  requestMylisting : bindActionCreators(requestMylisting , dispatch),
    
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCardPreview);

