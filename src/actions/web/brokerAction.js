import { PROFILE_DETAIL, PROFILE_PICTURE, ACTIVE_VIEW } from '../constants';
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



  export const profilepicture = (profilepicture) => {
    return {
      type: PROFILE_PICTURE,
      profilepicture,
    };
  };

  export const updateprofilePicture = (params) => {
   
    const headers = 
    {
      Authorization     : `Bearer ${getAuthHeader()}`,
      'content-type'    : 'application/json'
    }

    return (dispatch, getState) => {
      const bodyFormData = new FormData();
      bodyFormData.set('image', params.image);
      const {login} = getState();
     
      postReq(`${apiURLPrefix}/broker/update_profile_photo`, bodyFormData , headers)
      .then(handleResponse)
      .then((res) => {
      
          login.user.profile_photo = res.response.profile_photo;
          setUserInSession(login.user);
          dispatch(profilepicture(res));
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };


  export const currentActiveView = (activeview) => {
    return {
      type: ACTIVE_VIEW,
      activeview,
    }; 
  };
  export const changeView = (params) => {
    return (dispatch,getState) => {
        dispatch(currentActiveView(params));
    }
  };