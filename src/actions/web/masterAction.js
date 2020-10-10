import { MASTER_STATE, MASTER_BROKERAGE, MASTER_LICENSE} from '../constants';
import { getPublicIP, getAuthHeader , setJWTToken, setUserInSession } from "../../helpers/authHelper";
import { getReq , putReq, postReq} from '../rest';
import { handleResponse , loader } from '../utils';


export const masterState = (masterstate) => {
  
  return {
    type: MASTER_STATE,
    masterstate,
  };
};

export const masterBrokerage = (masterbrokerage) => {
    return {
      type: MASTER_BROKERAGE,
      masterbrokerage,
    };
};

export const masterLicense = (masterlicense) => {
    return {
      type: MASTER_LICENSE,
      masterlicense,
    };
};

export const fetchMasterData = (params) => {
    const param = JSON.stringify({
      type		            : params.type,
      search_param 		    : params.search_param,
      logged_in_brokerid    : ""
    });
    const headers = 
    {
      'Authentication'  : getAuthHeader(),
      'content-type'    : 'application/json'
    }

    return (dispatch, getState) => {
      
      postReq(`${apiURLPrefix}/masterdata/list`, param , headers)
      .then(handleResponse)
      .then((res) => {
          if(params.type == 'STATE'){
            dispatch(masterState(res));
          }else if(params.type == 'BROKERAGE'){
            dispatch(masterBrokerage(res));
          }else if(params.type == 'LICENSE'){
            dispatch(masterLicense(res));
          }
       
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };