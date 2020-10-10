import { PROFILE_DETAIL } from '../constants';
import { getPublicIP, getAuthHeader , setJWTToken, setUserInSession } from "../../helpers/authHelper";
import { getReq , putReq, postReq} from '../rest';
import { handleResponse , loader } from '../utils';


export const profileDetail = (profiledetail) => {
  return {
    type: PROFILE_DETAIL,
    profiledetail,
  };
};

export const getprofileDetails = (params) => {
   
  
    const headers = 
    {
      Authorization     : `Bearer ${getAuthHeader()}`,
      'content-type'    : 'application/json'
    }

    return (dispatch, getState) => {
        const {login} = getState();
        const param = JSON.stringify({
            brokers_id : login.user.id
       });
       
      postReq(`${apiURLPrefix}/broker/profile_details`, param , headers)
      .then(handleResponse)
      .then((res) => {
        dispatch(profileDetail(res));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };