import { LISTING_ACTIVE_VIEW, MY_LISTING, LISTING_STORAGE, SAVE_LISTING, DETAIL_LISTING, STATUS_LISTING_CANCEL, NOPAY_LISTING_CANCEL, WITHPAY_LISTING_CANCEL, PAYMENT_METHOD_LIST } from '../constants';
import { getPublicIP, getAuthHeader , setJWTToken, setUserInSession } from "../../helpers/authHelper";
import { getReq , putReq, postReq} from '../rest';
import { handleResponse , loader } from '../utils';


  export const currentActiveView = (activelistingview) => {
    return {
      type: LISTING_ACTIVE_VIEW,
      activelistingview,
    }; 
  };
  export const changeView = (params) => {
    return (dispatch,getState) => {
        dispatch(currentActiveView(params));
    }
  };

  export const liststorage = (liststorage) => {
    return {
      type: LISTING_STORAGE,
      liststorage,
    }; 
  };
  export const listinginLocalStorage = (params) => {
    return (dispatch,getState) => {
       // dispatch(liststorage(params));
        dispatch(currentActiveView(params));
    } 
  };

  export const mylisting = (mylisting) => {
    return {
      type: MY_LISTING,
      mylisting,
    };
  };

  export const requestMylisting = (params) => {

    const param = JSON.stringify({
      flag : params.flag
    });
    const headers = 
    {
      Authorization     : `Bearer ${getAuthHeader()}`,
      'content-type'    : 'application/json'
    }

    return (dispatch, getState) => {
     
      postReq(`${apiURLPrefix}/listing/my_listing`, param , headers)
      .then(handleResponse)
      .then((res) => {
          dispatch(mylisting(res));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };

  export const detaillisting = (detaillisting) => {
    
    return {
      type: DETAIL_LISTING,
      detaillisting,
    };
  };

  export const requestDetaillisting = (params) => {
    loader(true);
    const param = JSON.stringify({
      listing_id : params.listing_id
    });
    const headers = 
    {
      Authorization     : `Bearer ${getAuthHeader()}`,
      'content-type'    : 'application/json'
    }

    return (dispatch, getState) => {
     
      postReq(`${apiURLPrefix}/listing/details`, param , headers)
      .then(handleResponse)
      .then((res) => {
         loader(false);
          dispatch(detaillisting(res));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };


  export const savelisting = (savelisting) => {
    return {
      type: SAVE_LISTING,
      savelisting,
    };
  };

  export const saveMylisting = (param) => {
    loader(true);
    let formData = new FormData();
    formData.append("keyword",JSON.stringify(param.keyword));
    formData.append("type", param.type);
    formData.append("property_address", param.full_address);
    formData.append("property_latitude", param.lat);
    formData.append("property_longitude", param.lng);
    formData.append("listing_date", param.date_backend);
    formData.append("listing_time", param.time_backend);
    formData.append("access_type", param.access_type);
    formData.append("client_number", param.client_number);
    formData.append("client_name", param.client_name);
    formData.append("agent_instruction", param.instruction);
    formData.append("offer_amount", param.offer_amount);
    formData.append("mls", JSON.stringify(param.mlsdetail));
    formData.append("property_city", param.city);
    formData.append("property_zipcode", param.zipcode);

    const headers = 
    {
      Authorization     : `Bearer ${getAuthHeader()}`,
      'content-type'    : 'application/json'
    }

    return (dispatch, getState) => {
     
      postReq(`${apiURLPrefix}/listing/create`, formData , headers)
      .then(handleResponse)
      .then((res) => {
          loader(false);
          dispatch(savelisting(res));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };

  /* Cancel Listing Status Check*/
  export const listingStatusForCancel = (statuslistingcancel) => {
    
    return {
      type: STATUS_LISTING_CANCEL,
      statuslistingcancel,
    };
  };

  export const checkListingStatusForCancel = (params) => {
   
    const param = JSON.stringify({
      listing_id : params.listing_id
    });
    const headers = {
      Authorization     : `Bearer ${getAuthHeader()}`,
      'content-type'    : 'application/json'
    }

    return (dispatch, getState) => {
      postReq(`${apiURLPrefix}/listing/checkListingStatusForCancel`, param , headers)
      .then(handleResponse)
      .then((res) => {
         dispatch(listingStatusForCancel(res));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };


    /* Cancel Listing without Payment*/


    export const cancellistingWithoutpay = (nopaycancellisting) => {
    
      return {
        type: NOPAY_LISTING_CANCEL,
        nopaycancellisting,
      };
    };
  
    export const nopayCancellisting = (params) => {
     
      const param = JSON.stringify({
        listing_id : params.listing_id
      });
      const headers = {
        Authorization     : `Bearer ${getAuthHeader()}`,
        'content-type'    : 'application/json'
      }
  
      return (dispatch, getState) => {
        postReq(`${apiURLPrefix}/listing/cancel_listing`, param , headers)
        .then(handleResponse)
        .then((res) => {
           dispatch(cancellistingWithoutpay(res));
        }).catch((err)=>{
          console.log(err)
        }) 
      } 
      
    };



    /* Cancel Listing with Payment*/


    export const cancellistingWithpay = (withpaycancellisting) => {
    
      return {
        type: WITHPAY_LISTING_CANCEL,
        withpaycancellisting,
      };
    };
  
    export const withpayCancellisting = (params) => {
     /*  loader(true);
      const param = JSON.stringify({
        listing_id     : params.listing_id,
        amount         : params.amount,
        stripe_res     : JSON.stringify(params.stripe_res),
        payment_reason :'LISTING_CANCEL'
      });
      const headers = {
        Authorization     : `Bearer ${getAuthHeader()}`,
        'content-type'    : 'application/json'
      }
  
      return (dispatch, getState) => {
        postReq(`${apiURLPrefix}/payment/updatePaymentStatus`, param , headers)
        .then(handleResponse)
        .then((res) => {
           loader(false);
           dispatch(cancellistingWithpay(res));
        }).catch((err)=>{
          console.log(err)
        }) 
      }  */


      loader(true);
      const param = JSON.stringify({
        items           : [{ id: 'photo-subscription'}],
	      currency        : "usd",
	      account         : params.account,
	      payment_method  : params.payment_method,
        card_number     : params.card_number,//"4242424242424242", 
        exp_month       : params.exp_month,
        exp_year        : params.exp_year,
        cvc             : params.cvv,
        listing_id      : params.listing_id,
        amount          : params.amount,
        payment_reason  :'LISTING_CANCEL'
      });
      const headers = {
        Authorization     : `Bearer ${getAuthHeader()}`,
        'content-type'    : 'application/json'
      }
  
      return (dispatch, getState) => {
        postReq(`${apiURLPrefix}/payment/payment_with_stripe`, param , headers)
        .then(handleResponse)
        .then((res) => {
           loader(false);
           dispatch(cancellistingWithpay(res));
        }).catch((err)=>{
          console.log(err)
        }) 
      } 
      
    };


    export const paymentMethod = (paymentmethodlist) => {
    
      return {
        type: PAYMENT_METHOD_LIST,
        paymentmethodlist,
      };
    };
  
    export const paymentmethodListing = () => {
      const param = null;
      const headers = {
        Authorization     : `Bearer ${getAuthHeader()}`,
        'content-type'    : 'application/json'
      }
  
      return (dispatch, getState) => {
        postReq(`${apiURLPrefix}/payment/payment_card_list`, param , headers)
        .then(handleResponse)
        .then((res) => {
           dispatch(paymentMethod(res));
        }).catch((err)=>{
          console.log(err)
        }) 
      } 
      
    };

  
