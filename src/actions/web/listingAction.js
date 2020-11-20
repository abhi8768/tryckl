import { LISTING_ACTIVE_VIEW, MY_LISTING, LISTING_STORAGE, SAVE_LISTING} from '../constants';
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


  export const savelisting = (savelisting) => {
    return {
      type: SAVE_LISTING,
      savelisting,
    };
  };

  export const saveMylisting = (param) => {
  
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
          dispatch(savelisting(res));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };