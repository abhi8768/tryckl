import { SET_CURRENT_USER, SIGNUP, VERIFIED_OTP, RESEND_OTP, REVIEW_MEMBERSHIP } from '../constants';
import { getPublicIP, getAuthHeader , setJWTToken, setUserInSession } from "../../helpers/authHelper";
import { getReq , putReq, postReq} from '../rest';
import { handleResponse , loader } from '../utils';


export const loginUser = (user) => {
  setUserInSession(user);
  setJWTToken(user._jwtToken);
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

export const createLoginRequest = (params) => {

    const param = JSON.stringify({
      user_id		    : params.user_id,
      password 		  : params.password,
      device_type   : "WEB",
      device_id     : getPublicIP()
    
   });
    const headers = 
    {
      'Authentication'  : getAuthHeader(),
      'content-type'    : 'application/json'
    }

    return (dispatch, getState) => {
      
      postReq(`${apiURLPrefix}/auth/login`, param , headers)
      .then(handleResponse)
      .then((res) => {
        dispatch(loginUser(res.response));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };