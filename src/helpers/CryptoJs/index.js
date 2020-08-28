import CryptoJS from 'crypto-js';
import { matchPath  } from 'react-router-dom';
const key =  CryptoJS.enc.Hex.parse(cryptoKey);
const iv = CryptoJS.enc.Hex.parse(cryptoKey);

export const encrypt = (param) => {
  
    try {
      if(param != undefined){
        const options = { mode: CryptoJS.mode.CBC, iv: iv};
        const json = CryptoJS.AES.encrypt(param.toString(), key, options);
        return json.ciphertext.toString(CryptoJS.enc.Hex);
      }
    } catch (err) {
        console.error(err);
        return "";
    }
};

export const decrypt = (hex) => {
    try {
        const options = { mode: CryptoJS.mode.CBC, iv: iv};
        const json = CryptoJS.AES.decrypt({
            ciphertext: CryptoJS.enc.Hex.parse(hex)
        }, key, options);
        return json.toString(CryptoJS.enc.Utf8);
      } catch (err) {
        console.error(err);
        return "";
      }
};

export const getParams = (pathname , type) => {
    const matchProfile = matchPath(pathname, {
      path: type,
    });
    return (matchProfile && matchProfile.params) || {};
  };