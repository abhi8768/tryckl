import React from 'react';
import {CardElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {ToastsStore} from 'react-toasts';
const style = {
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
};
const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);
    //console.log(cardElement);
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
  
     /*  document.querySelector(".sr-payment-form").classList.add("hidden");
      document.querySelector("pre").textContent = paymentIntentJson;
  
      document.querySelector(".sr-result").classList.remove("hidden");
      setTimeout(function() {
        document.querySelector(".sr-result").classList.add("expand");
      }, 200); */
  
      //changeLoadingState(false);
    });
  };

  return (
    <div>
      <form id="paymentform">
        <CardElement options={style}/>
        <button className="sv-btn" onClick={handleSubmit} disabled={!stripe}>Pay</button>
      </form>
    </div>  
   
  );
};
const stripePromise = loadStripe("pk_live_51HQ39DH4WRu13wRHP226zaRc1x5IxxZ34HJFgBe0cnvknQIeF1FprsNezacdl2jF8hGKtV63k3P5UlgNAbsyjbAx006IaHnfQ2");

const Card = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm forCancellation={props.forCancellation}/>
    </Elements>
  );
};
export default Card;