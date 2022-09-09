import {
  SET_CURRENT_USER,
  CREATE_ACCOUNT,
  LOGOUT_USER,
  FORGET_PASSWORD,
  FORGET_USERID,
  RESET_PASSWORD,
  REGISTRATION_VERIFICATION,
  RESEND_OTP,
} from "../constants";
import {
  getPublicIP,
  getAuthHeader,
  setJWTToken,
  setUserInSession,
  removeSessionData,
} from "../../helpers/authHelper";
import { getReq, putReq, postReq } from "../rest";
import { handleResponse, loader } from "../utils";

export const loginUser = (user) => {
  if (user.status == true && user.response.status == "1") {
    setUserInSession(user.response);
    setJWTToken(user.response._jwtToken);
    /*   localStorage.setItem('login_rememberme', user.login_rememberme);
      localStorage.setItem('login', 'true');
      if(user.login_rememberme == 'checked'){
        localStorage.setItem('login_username', user.login_username);
        localStorage.setItem('login_password', user.login_password);
        
      } */
  }
  if (user.status == true && user.response.status == "0") {
    localStorage.setItem(
      "userNotverifiedDetails",
      JSON.stringify(user.response)
    );
    localStorage.setItem("userNotverified", "1");
  }

  return {
    type: SET_CURRENT_USER,
    user,
  };
};

export const createLoginRequest = (params) => {
  loader(true);

  const param = JSON.stringify({
    user_id: params.user_name,
    password: params.login_password,
    device_type: "WEB",
    device_id: getPublicIP(),
  });
  const headers = {
    Authorization: `Bearer ${getAuthHeader()}`,
    "content-type": "application/json",
  };

  return (dispatch, getState) => {
    postReq(`${apiURLPrefix}/auth/login`, param, headers)
      .then(handleResponse)
      .then((res) => {
        res.login_username = params.user_name;
        res.login_password = params.login_password;
        res.login_rememberme = params.remember_me;

        loader(false);
        dispatch(loginUser(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const registrationVerificationUser = (user) => {
  if (user.status === true) {
    setUserInSession(user.response);
    setJWTToken(user.response._jwtToken);
  }

  return {
    type: REGISTRATION_VERIFICATION,
    user,
  };
};

export const registrationVerificationRequest = (params) => {
  const param = JSON.stringify({
    brokers_id: params.brokers_id,
    mobile_otp: params.mobile_otp,
    email_otp: params.email_otp,
    verification_type: params.verification_type,
    device_type: "WEB",
    device_id: getPublicIP(),
  });
  const headers = {
    "content-type": "application/json",
  };

  return (dispatch, getState) => {
    postReq(`${apiURLPrefix}/auth/verification`, param, headers)
      .then(handleResponse)
      .then((res) => {
        dispatch(registrationVerificationUser(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const registerUser = (registeruser) => {
  return {
    type: CREATE_ACCOUNT,
    registeruser,
  };
};

export const createAccountRequest = (params) => {
  // debugger;
  loader(true);
  const param = JSON.stringify({
    first_name: params.first_name,
    last_name: params.last_name,
    mobile_no: params.mobile_no,
    email_id: params.email_id,
    license_number_id: params.license_number_id,
    password: params.password,
    license_issuing_state_id: params.license_issuing_state_id,
    brokerage_id: params.brokerage_id,
    other_brokerage_name: params.other_brokerage_name,
    user_type: params.user_type,
    latitude: params.latitude,
    longitude: params.longitude,
    brokers_id: params.brokers_id,
  });

  const headers = {
    Authorization: `Bearer ${getAuthHeader()}`,
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  return (dispatch, getState) => {
    postReq(`${apiURLPrefix}/auth/create_account`, param, headers)
      .then(handleResponse)
      .then((res) => {
        loader(false);
        dispatch(registerUser(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const resendOTP = (data) => {
  //console.log('data : ', data);
  return {
    type: RESEND_OTP,
    data,
  };
};

export const resendOTPRequest = (params) => {
  const param = JSON.stringify({
    brokers_id: params.brokers_id,
    otp_type: params.otp_type,
    verification_type: params.verification_type,
  });

  const headers = {
    "content-type": "application/json",
  };

  return (dispatch, getState) => {
    postReq(`${apiURLPrefix}/auth/resendOtp`, param, headers)
      .then(handleResponse)
      .then((res) => {
        //console.log('res : ',res);
        dispatch(resendOTP(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logoutUser = (logoutUser) => {
   sessionStorage.removeItem("jwtToken");
   sessionStorage.removeItem("userDetails");
   sessionStorage.removeItem("createlisting");
   sessionStorage.clear();
   localStorage.removeItem("userDetails");
   localStorage.removeItem("jwtToken");
   localStorage.removeItem("login_rememberme");
   location.href = "/agent-login";
  return {
    type: LOGOUT_USER,
    logoutUser,
  };
};

export const logoutRequest = (params) => {
  const param = JSON.stringify({
    brokers_id: params.user_id,
    device_type: "WEB",
    device_id: getPublicIP(),
  });
  const headers = {
    Authorization: `Bearer ${getAuthHeader()}`,
    "content-type": "application/json",
  };

  return (dispatch, getState) => {
    postReq(`${apiURLPrefix}/auth/logout`, param, headers)
      .then(handleResponse)
      .then((res) => {
        dispatch(logoutUser(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const forgetpassword = (forgetpassword) => {
  return {
    type: FORGET_PASSWORD,
    forgetpassword,
  };
};

export const forgetpasswordRequest = (params) => {
  const param = JSON.stringify({
    email: params.email,
    ip: getPublicIP(),
  });
  const headers = {
    Authorization: `Bearer ${getAuthHeader()}`,
    "content-type": "application/json",
  };

  return (dispatch, getState) => {
    postReq(`${apiURLPrefix}/auth/forgetPassword`, param, headers)
      .then(handleResponse)
      .then((res) => {
        dispatch(forgetpassword(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const forgetuserid = (forgetuserid) => {
  return {
    type: FORGET_USERID,
    forgetuserid,
  };
};

export const forgetuseridRequest = (params) => {
  const param = JSON.stringify({
    email: params.email,
    ip: getPublicIP(),
  });
  const headers = {
    Authorization: `Bearer ${getAuthHeader()}`,
    "content-type": "application/json",
  };

  return (dispatch, getState) => {
    postReq(`${apiURLPrefix}/auth/forgetUserid`, param, headers)
      .then(handleResponse)
      .then((res) => {
        dispatch(forgetuserid(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const resetpassword = (resetpassword) => {
  return {
    type: RESET_PASSWORD,
    resetpassword,
  };
};

export const resetpasswordRequest = (params) => {
  const param = JSON.stringify({
    brokers_id: params.brokerId,
    password: params.password,
  });
  const headers = {
    Authorization: `Bearer ${getAuthHeader()}`,
    "content-type": "application/json",
  };

  return (dispatch, getState) => {
    postReq(`${apiURLPrefix}/auth/resetPassword`, param, headers)
      .then(handleResponse)
      .then((res) => {
        dispatch(resetpassword(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
