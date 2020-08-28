import axios from 'axios';
const CONFIG = {
    'Accept':'application/json',
    'Content-Type':'application/json',
    'Cache-Control' : 'no-cache',
    'Authorization' : `Basic ${btoa('baaldahab_api' + ':' + 'Baaldahab2O!8')}`,
    'language' : 'en',
    'Authentication' : `Bearer `
};

const checkUserStatus = () => {
    return true;
};
/*
 Function Name: get
 Description  : Override axios get method
 Output       : return res or err
 Author       : APPSBEE (SOHOM ROY)
 Date         : Nov-05-2019
 * */
export const getReq     = (url = null , params = null, config = CONFIG) => {
    if(params !== null){
        return axios.get(url, {params}).then(res => {
            return res;
        }).catch(err => {
            return  err;
        });
    }else{
        return axios({
            url: `${url}`,
            method: 'GET',
            headers: config,
            withCredentials: true
        }).then(res => {
            return res;
        }).catch(err => {
            return  err;
        });
    }
};
/*
 Function Name: post
 Description  : Override axios post method
 Output       : return res or err
 Author       : APPSBEE (SOHOM ROY)
 Date         : August-08-2018
 * */
export const postReq    = (url = null , params = null, config = CONFIG) => {

    return axios.post(url, params, {
		 headers: config,
	}).then(function(response) {
        return response;
        //console.log(response);

    }).catch(function(error) {
        return error;
        //console.log(error);

    });

    //};
    /* return axios({
        url: `${url}`,
        method: 'POST',
        data: params,
        headers: config
    }).then(res => {
        return res;
    }).catch(err => {
        return  err;
    }); */
};
/*
 Function Name: put
 Description  : Override axios put method
 Output       : return res or err
 Author       : APPSBEE (SOHOM ROY)
 Date         : Nov-05-2019
 * */
export const putReq     = (url = null, params = null, config = CONFIG) => {};
/*
 Function Name: deleteReq
 Description  : Override axios deleteReq method
 Output       : return res or err
 Author       : APPSBEE (SOHOM ROY)
 Date         : Nov-05-2019
 * */
export const deleteReq = (url = null, params = null, config = CONFIG) => {};