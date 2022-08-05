import {
  PROFILE_DETAIL,
  PROFILE_PICTURE,
  ACTIVE_VIEW,
  PROFILE_UPDATE,
} from "../constants";
import {
  getPublicIP,
  getAuthHeader,
  setJWTToken,
  setUserInSession,
} from "../../helpers/authHelper";
import { getReq, putReq, postReq } from "../rest";
import { handleResponse, loader } from "../utils";
import moment from "moment";

export const profileDetail = (profiledetail) => {
  return {
    type: PROFILE_DETAIL,
    profiledetail,
  };
};

export const getprofileDetails = (params) => {
  const headers = {
    Authorization: `Bearer ${getAuthHeader()}`,
    "content-type": "application/json",
  };

  return (dispatch, getState) => {
    const { login } = getState();
    const param = JSON.stringify({
      brokers_id: params.brokers_id,
    });

    postReq(`${apiURLPrefix}/broker/profile_details`, param, headers)
      .then(handleResponse)
      .then((res) => {
        dispatch(profileDetail(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const profilepicture = (profilepicture) => {
  return {
    type: PROFILE_PICTURE,
    profilepicture,
  };
};

export const updateprofilePicture = (params) => {
  const headers = {
    Authorization: `Bearer ${getAuthHeader()}`,
    "content-type": "application/json",
  };

  return (dispatch, getState) => {
    const bodyFormData = new FormData();
    bodyFormData.set("image", params.image);
    const { login } = getState();

    postReq(
      `${apiURLPrefix}/broker/update_profile_photo`,
      bodyFormData,
      headers
    )
      .then(handleResponse)
      .then((res) => {
        login.user.profile_photo = res.response.profile_photo;
        setUserInSession(login.user);
        dispatch(profilepicture(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const currentActiveView = (activeview) => {
  return {
    type: ACTIVE_VIEW,
    activeview,
  };
};
export const changeView = (params) => {
  return (dispatch, getState) => {
    dispatch(currentActiveView(params));
  };
};

export const profileupdate = (profileupdate) => {
  return {
    type: PROFILE_UPDATE,
    profileupdate,
  };
};

export const updateprofileDetails = (params) => {
  const headers = {
    Authorization: `Bearer ${getAuthHeader()}`,
    "content-type": "application/json",
  };

  return (dispatch, getState) => {
    //testing
    let dob = moment(params.dob).format("YYYY-MM-DD");
    console.log(params.dob, "dobup");
    // return console.log(params,dob);
    let state_code = $.map(params.master_state, function (obj) {
      if (obj.id === parseInt(params.brokerage_state)) return obj.state_code;
    });
    /* let dob = moment(params.brokerage_dob).format("YYYY-MM-DD"); //testing DOB
    // return console.log(params,brokerage_dob);
    let state_code = $.map(params.master_state, function (obj) {
      if (obj.id === parseInt(params.brokerage_state)) return obj.state_code;
    }); */

    const bodyFormData = new FormData();
    bodyFormData.set("first_name", params.first_name);
    bodyFormData.set("last_name", params.last_name);
    bodyFormData.set("license_number_id", params.license_number_id);
    bodyFormData.set("license_issuing_state_id", params.license_state_id);
    // bodyFormData.set('brokerage_id', params.brokerage);
    bodyFormData.set("other_brokerage_name", params.other_brokerage_name);
    bodyFormData.set("brokerage_office_name", params.brokerage_office_name);
    bodyFormData.set("street_name", params.brokerage_street_name);
    bodyFormData.set("city", params.brokerage_city_name);
    bodyFormData.set("state_id", params.brokerage_state);
    bodyFormData.set("zipcode", params.zipcode);
    //return console.log(params);

    var userDetails = localStorage.getItem("userDetails");
    userDetails = userDetails ? JSON.parse(userDetails) : {};
    userDetails["ssn"] = params.ssn;
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    //return console.log('ssn---',params,localStorage.getItem( 'ssn'),localStorage.removeItem('user_type'));
    postReq(`${apiURLPrefix}/broker/update_profile`, bodyFormData, headers)
      .then(handleResponse)
      .then((res) => {
        // if (JSON.parse(localStorage.getItem('userDetails')).ssn != null) {
        //   dispatch(currentActiveView("detail"));
        //   dispatch(profileupdate(res));
        // } else {
        //   debugger;
        const bodyFormDataDwolla = new FormData();
        bodyFormDataDwolla.set("user_type", "personal");
        bodyFormDataDwolla.set("first_name", params.first_name);
        bodyFormDataDwolla.set("last_name", params.last_name);
        bodyFormDataDwolla.set("email_id", params.email);
        bodyFormDataDwolla.set(
          "address1",
          params.brokerage_office_name + params.brokerage_street_name
        );
        bodyFormDataDwolla.set("address2", "");
        bodyFormDataDwolla.set("state_id", params.brokerage_state);
        bodyFormDataDwolla.set("city", params.brokerage_city_name);
        bodyFormDataDwolla.set("state_code", state_code);
        bodyFormDataDwolla.set("dateOfBirth", dob); //testing DOB
        bodyFormDataDwolla.set("postal_code", params.zipcode);
        bodyFormDataDwolla.set("ssn", params.ssn);

        postReq(
          `${apiURLPrefix}/dwolla/update_dwolla_customer`,
          bodyFormDataDwolla,
          headers
        )
          .then(handleResponse)
          .then((res) => {
            if (res.status) {
              dispatch(currentActiveView("detail"));
              dispatch(profileupdate(res));
            }
          })
          .catch((err) => {
            console.log(err);
          });
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
