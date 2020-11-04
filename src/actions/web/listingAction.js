import { LISTING_ACTIVE_VIEW, MY_LISTING} from '../constants';
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

  export const mylisting = (mylisting) => {
    return {
      type: MY_LISTING,
      mylisting,
    };
  };

  export const requestMylisting = () => {
    const param = JSON.stringify({
      
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
