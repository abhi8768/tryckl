import { LISTING_ACTIVE_VIEW} from '../constants';
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
/* 
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
 */