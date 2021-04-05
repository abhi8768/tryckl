import React, {Component} from 'react';
import StripeScriptLoader from 'react-stripe-script-loader';
import {
  CardElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';

// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    }
  }
};

class _CardForm extends Component {

  handleChange({error}) {
    if (error) {
      this.setState({errorMessage: error.message});
    }
  };

  handleSubmit (evt){
    evt.preventDefault();
    if (this.props.stripe) {
      this.props.stripe.createToken().then(this.props.handleResult);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    return (
      <div className="CardDemo">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Card details
            <CardElement
              
            />
          </label>
          <div className="error" role="alert">
            {this.state.errorMessage}
          </div>
          <button>Pay</button>
        </form>
      </div>
    );
  }
}
 
const CardForm = injectStripe(_CardForm);

export class CardDemo extends Component {
  render() {
    return (
      <StripeScriptLoader
      uniqueId="myUniqueId"
      script="https://js.stripe.com/v3/"
      loader="Loading..."
    ><StripeProvider apiKey="pk_test_51HQ39DH4WRu13wRH4uQwT2TdgcIufd8wv5wTnLiqwsIqKLQzdhLODen8r6qH5YbPorSHfocDa1I7doXdjaKYJKLH00AOZ5zpOF">
            
      <Elements>
        <CardForm  />
        </Elements>
      </StripeProvider>
    </StripeScriptLoader>
    );
  }
}
/* const CardDemo = () => (
    <StripeScriptLoader
      uniqueId="myUniqueId"
      script="https://js.stripe.com/v3/"
      loader="Loading..."
    ><StripeProvider apiKey="pk_test_51HQ39DH4WRu13wRH4uQwT2TdgcIufd8wv5wTnLiqwsIqKLQzdhLODen8r6qH5YbPorSHfocDa1I7doXdjaKYJKLH00AOZ5zpOF">
            
      <Elements>
        <CardForm  />
        </Elements>
      </StripeProvider>
    </StripeScriptLoader>
) */

export default CardDemo;