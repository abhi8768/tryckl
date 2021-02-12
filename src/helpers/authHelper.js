import ipify from 'ipify2';
/* import authenticationBasicKey from '../../config/auth.config'; */
import { getlanguage } from "./changelanguage";

export const getJWTToken = () => {
    const jwtToken = sessionStorage.getItem('jwtToken') || localStorage.getItem('jwtToken');
    return (jwtToken !== null ? jwtToken : null)
};

export const setJWTToken = (token) => {
    sessionStorage.setItem('jwtToken', token);
    localStorage.setItem('jwtToken', token);
    return true;
};

export const setPublicIP = () => {
    ipify.ipv4().then(ipv4 => {
        console.log(ipv4);
        sessionStorage.setItem('public_ip', ipv4);
    }).catch(error => {
        console.log(error)
    });
}

export const getPublicIP = () => {
    const public_ip = sessionStorage.getItem('public_ip');
    return (public_ip !== null ? public_ip : null)
}

/* export const getAuthKey = () => {
   
    return (btoa(authenticationBasicKey.user + ':' + authenticationBasicKey.password));
} */

export const getAuthHeader = () => {
    
   // let authenticationKey = getAuthKey();
    
    /* const  headers = {
        'Authentication': `Bearer ${JWTKey}`
    }; */
    let JWTKey            = getJWTToken();
    return JWTKey;
}

export const removeSessionData = () => {
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('userDetails');
    sessionStorage.removeItem("createlisting");
    sessionStorage.clear();
    localStorage.removeItem('userDetails');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('login_rememberme');
    //localStorage.clear();
    location.href = '/';
}

export const getUserFromSession = () => {
    const userdetails = sessionStorage.getItem('userDetails') || localStorage.getItem('userDetails');
    return (userdetails !== null ? JSON.parse(userdetails) : {})
};

export const getUserFromLocalStorage = () => {
    const userdetails = localStorage.getItem('userDetails');
    return (userdetails !== null ? JSON.parse(userdetails) : {})
};

export const setUserInSession = (user) => {
    sessionStorage.setItem('userDetails', JSON.stringify(user));
    localStorage.setItem('userDetails', JSON.stringify(user));
    return true;
};