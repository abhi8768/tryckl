import React from 'react';
import $ from "jquery";
import {CardElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {ToastsStore} from 'react-toasts';
import { GetCardType, checkCreditCard } from "../../.../../../helpers/cardHelper";

/* const style = {
  base: {
    color: '#232e35',
    fontFamily: '"Podkova", "Courier New", serif',
    fontSize: '16px',
    '::placeholder': {
      color: '#9ab4b0'
    }
  },
  invalid: {
    color: '#cf3100',
    iconColor: '#cf3100'
  }
}; */




const Card = (props) => {

  const manageCvv = () =>{
    
    let cvv = $('#cvv_number').val();
    localStorage.setItem('cvv_number',cvv);

   
    /* f(cvv.length == 0){
      localStorage.setItem('cvv_number','');
      $('#dummy').html('Enter CVV'); 
    }else if(cvv.length == 1){
     $('#dummy').html('*'); 
     localStorage.setItem('cvv_number','');
    }else if(cvv.length == 2){
      $('#dummy').html('**'); 
      localStorage.setItem('cvv_number','');
    }else{
      $('#dummy').html('***'); 
    } */
  }

  const manageCard = () =>{
    let card_number = $('#card_number').val();
    let cardType = GetCardType(card_number);
    localStorage.setItem('card_number','');

    if (checkCreditCard (card_number,cardType)) {
      localStorage.setItem('card_number',card_number);
      $("#card_number").css("color", "black");
     
    }else{
      localStorage.setItem('card_number','');
      $("#card_number").css("color", "red");
    };
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    let cvv_number  = localStorage.getItem('cvv_number');
    let card_number = localStorage.getItem('card_number');
    let exp_month   =  $("select#expiry_month option").filter(":selected").val();
    let exp_year    =  $("select#expiry_year option").filter(":selected").val();
    if(props.savedPaymentmethod != ''){
      props.forCancellation('','','','');
    }else{
      if((cvv_number != '') && (card_number != '') && (exp_month != '0') && (exp_year != '0')){
        console.log(cvv_number,card_number,exp_month,exp_year);
        props.forCancellation(cvv_number,card_number,exp_month,exp_year);
      }
    }
   
    
    //props.forCancellation(result);
  }
/*   const stripe = useStripe();
  const elements = useElements(); */

/*   const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
   

    const cardElement = elements.getElement(CardElement);
    console.log(cardElement); 

  
    let  paymentIntentClientSecret = localStorage.getItem('paymentIntentClientSecret');
    stripe
    .confirmCardPayment(paymentIntentClientSecret, {
      payment_method: {
        card: cardElement
      }
    })
    .then(function(result) {
      if (result.error) {
        // Show error to your customer
        showError(result.error.message);
      } else {
        // The payment has been processed!
        orderComplete(paymentIntentClientSecret);
      }
    });

  };


  const showError = function(errorMsgText) {
    //console.log(errorMsgText);
    ToastsStore.error(errorMsgText);
  };
  const orderComplete = function(clientSecret) {
    //console.log(clientSecret);
    // Just for the purpose of the sample, show the PaymentIntent response object
    stripe.retrievePaymentIntent(clientSecret).then(function(result) {
      //console.log(result);
      props.forCancellation(result);
      var paymentIntent = result.paymentIntent;
      var paymentIntentJson = JSON.stringify(paymentIntent, null, 2);
      //changeLoadingState(false);
    });
  }; */
  var minn = new Date().getFullYear();
  var maxx = minn + 20;
  var year = [];
  for(var i= minn; i<=maxx; i++){
    year.push(i);
  }
  return (
    <div>
      <form id="paymentform">
         {/* <CardNumberElement options={style}/>   */}
        {
          (props.savedPaymentmethod != '') ? 
          <div className="saved_card">
                <div className="content-part-wrapper dark-part position-relative">
                  <p className="ohters-color">Credit Card Number</p>
                  <p className="ohters-color2">****{props.savedCarddetails.last4}</p>
                  
                </div>
          </div>

          : <div className="new_card form-container2">
              <div className="row">
                <div className="col-lg-12">
                        <input 
                          className="form-control"
                          placeholder="Credit Card Number"
                          name="card_number"
                          id="card_number" 
                          onBlur={manageCard} 
                          autocomplete="off"
                        />
                </div>        
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <select className="custom-select2" name="expiry_month" id="expiry_month">
                    <option value="0">Expiry Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>

                  </select>
                </div>
                <div className="col-lg-6">
                  <select className="custom-select2" name="expiry_year" id="expiry_year">
                    <option value="0">Expiry Year</option>
                    {
                      year.map((limit,index) => {
                        return ( <option value={limit} key={`limit_${index}`}>{limit}</option>
                                )
                      })
                    }
                  
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12" id="cvv">
                      <input 
                          className="form-control"
                          placeholder="Enter CVV"
                          name="cvv_number"
                          id="cvv_number" 
                          onKeyUp={manageCvv} 
                          maxLength="3"
                          type="text" 
                          autocomplete="off"
                        />
                        {/* <span id="dummy">Enter CVV</span>        */}                 
                        
                </div>
              </div>
            </div>
        }
          <button className="sv-btn" onClick={handleSubmit} >Pay</button>
      </form>
    </div>  
   
  );
};
/*
pk_live_51HQ39DH4WRu13wRHP226zaRc1x5IxxZ34HJFgBe0cnvknQIeF1FprsNezacdl2jF8hGKtV63k3P5UlgNAbsyjbAx006IaHnfQ2
pk_test_51HQ39DH4WRu13wRH4uQwT2TdgcIufd8wv5wTnLiqwsIqKLQzdhLODen8r6qH5YbPorSHfocDa1I7doXdjaKYJKLH00AOZ5zpOF
*/
/*  const stripePromise = loadStripe("pk_test_51HQ39DH4WRu13wRH4uQwT2TdgcIufd8wv5wTnLiqwsIqKLQzdhLODen8r6qH5YbPorSHfocDa1I7doXdjaKYJKLH00AOZ5zpOF");

const Card = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm forCancellation={props.forCancellation}/>
    </Elements>
  );
};  */
export default Card;