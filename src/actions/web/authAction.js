import { SET_CURRENT_USER, CREATE_ACCOUNT, VERIFIED_OTP, RESEND_OTP, REVIEW_MEMBERSHIP } from '../constants';
import { getPublicIP, getAuthHeader , setJWTToken, setUserInSession } from "../../helpers/authHelper";
import { getReq , putReq, postReq} from '../rest';
import { handleResponse , loader } from '../utils';


export const loginUser = (user) => {
  setUserInSession(user.response);
  setJWTToken(user.response._jwtToken);
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
        dispatch(loginUser(res));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };


  export const registerUser = (registeruser) => {
    return {
      type: CREATE_ACCOUNT,
      registeruser,
    };
  };
  
  export const createAccountRequest = (params) => {
  
      const param = JSON.stringify({
        first_name                : params.first_name,
        last_name                 : params.last_name,
        mobile_no                 : params.mobile_no,
        email_id                  : params.email_id,
        license_number_id         : params.license_number_id,
        password                  : params.password,
        license_issuing_state_id  : params.license_issuing_state_id,
        brokerage_id              : params.brokerage_id,
        brokers_id                : null
      
     });
      const headers = 
      {
        'Authentication'  : getAuthHeader(),
        'content-type'    : 'application/json'
      }
  
      return (dispatch, getState) => {
        
        postReq(`${apiURLPrefix}/auth/create_account`, param , headers)
        .then(handleResponse)
        .then((res) => {
          dispatch(registerUser(res));
        }).catch((err)=>{
          console.log(err)
        }) 
      } 
      
    };