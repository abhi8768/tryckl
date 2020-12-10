import { CONTACT_US } from '../constants';
import { getPublicIP, getAuthHeader , setJWTToken, setUserInSession , removeSessionData} from "../../helpers/authHelper";
import { getReq , putReq, postReq} from '../rest';
import { handleResponse , loader } from '../utils';


  export const contactus = (contactus) => {
    
    return {
      type: CONTACT_US,
      contactus,
    };
  };

  export const contactusRequest = (params) => {
    loader(true);
    
    const headers = 
    {
       Authorization     : `Bearer ${getAuthHeader()}`,
      'content-type'     : 'application/json'
    }

    return (dispatch, getState) => {
      const bodyFormData = new FormData();
      bodyFormData.set('name', params.name);
      bodyFormData.set('email', params.email);
      bodyFormData.set('message', params.message);

      postReq(`${apiURLPrefix}/contact_us/contact_us`, bodyFormData , headers)
      .then(handleResponse)
      .then((res) => {
        loader(false);
        dispatch(contactus(res));
        
      }).catch((err)=>{
        console.log(err)
      }) 
    } 
    
  };

  