import { NOTIFICATION_LIST } from '../constants';
import { getPublicIP, getAuthHeader , setJWTToken, setUserInSession } from "../../helpers/authHelper";
import { getReq , putReq, postReq} from '../rest';
import { handleResponse , loader } from '../utils';


export const notificationList = (notification) => {
  return {
    type: NOTIFICATION_LIST,
    notification,
  };
};

export const notificationRequest = (params) => {

    const param = JSON.stringify({
    
    
   });
    const headers = 
    {
      Authorization     : `Bearer ${getAuthHeader()}`,
      'content-type'    : 'application/json'
    }

    return (dispatch, getState) => {
      
      postReq(`${apiURLPrefix}/notification/list`, param , headers)
      .then(handleResponse)
      .then((res) => {
        dispatch(notificationList(res.response));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };