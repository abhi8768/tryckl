//import 'whatwg-fetch';
//import store from 'store';
//import basicAuth from 'config';
import isEmpty from 'lodash/isEmpty';

// handle exception here
export const handleResponse = (response, currentAction, resData, routeUrl) => {

  if (response.status === 200) {
    let res = response.data;
    return res;
  }
  
  if (response.status === 400) {
    return response.data.response;
  }
  // Return error
  const error = new Error(response);
  error.response = response.code;
  throw error;
};

export const loader = (status = false) => {
 
  const preloader = (document.getElementById('preloader'));
 
  if(preloader != null){
   if(status) {
      document.getElementById('preloader').style.display = 'block';
    }else{
      document.getElementById('preloader').style.display = 'none';
    }
  }
};

export const pageloader = (status = false) => {
  const pageloader = (document.getElementById('pageloader'));
  if(pageloader != null){
    if(status) {
      document.getElementById('pageloader').style.display = 'block';
    }else{
      document.getElementById('pageloader').style.display = 'none';
    }
  }
};

export const chatloader = (status = false) => {
  const circularprogress = (document.getElementById('circularprogress'));
  if(circularprogress != null){
    if(status) {
      
        document.getElementById('circularprogress').style.display = 'block';
      }else{
     
        document.getElementById('circularprogress').style.display = 'none';
      
    }
  }
};