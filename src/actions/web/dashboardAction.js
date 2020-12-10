import { DASHBOARD_LIST } from '../constants';
import { getPublicIP, getAuthHeader , setJWTToken, setUserInSession } from "../../helpers/authHelper";
import { getReq , putReq, postReq} from '../rest';
import { handleResponse , loader } from '../utils';


export const notificationList = (dashboard) => {
  return {
    type: DASHBOARD_LIST,
    dashboard,
  };
};

export const dashboardRequest = (params) => {
    loader(true);
    const param = JSON.stringify({
    
    
   });
    const headers = 
    {
      Authorization     : `Bearer ${getAuthHeader()}`,
      'content-type'    : 'application/json'
    }

    return (dispatch, getState) => {
      
      postReq(`${apiURLPrefix}/dashboard/details`, param , headers)
      .then(handleResponse)
      .then((res) => {
        loader(false);
        dispatch(notificationList(res));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };