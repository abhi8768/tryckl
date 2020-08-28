import validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { getlanguagelist } from "../../helpers/changelanguage";

import { USERNAME, INVALID_USERNAME, PASSWORD_INVALID, PASSWORD_LONG } from './customMessages';

// Signin validation
export const validateInput = (data) => {
  const error = {};
  if (validator.isEmpty(data.username)) {
    error.message = USERNAME;
  }else if( !validator.isEmail(data.username) && !validator.isNumeric(data.username)){
    error.message = INVALID_USERNAME;
  }
  if (validator.isEmpty(data.password)) {
    error.message = PASSWORD_INVALID;
  }

  return {
    error,
    isValid: isEmpty(error),
  };
}


// signup validation
export const validatesignupInput = (data) => {
  let  languagelist    =  getlanguagelist();
  var decimal          =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  var mailformat       = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const error = {};
  if ((data.title != undefined) &&  validator.isEmpty(data.title)) {
    error.message = languagelist.titlevalid;
  }else if ((data.first_name != undefined) && validator.isEmpty(data.first_name)) {
    error.message = languagelist.fnamevalid;
  }else  if ((data.gender != undefined) &&  validator.isEmpty(data.gender)) {
    error.message = languagelist.gendervalid;
  }else  if ((data.password != undefined) && !data.password.match(decimal)) {
    error.message = languagelist.passwordvalid;
  }else  if ((data.country != undefined) &&  data.country == '') {
    error.message = languagelist.countryvalid;
  }else  if ((data.state != undefined) &&  data.state == '') {
    error.message = languagelist.statevalid;
  }else  if ((data.city != undefined) && data.city == '') {
    error.message = languagelist.cityvalid;
  }else  if ((data.zipcode != undefined) &&  data.zipcode == '') {
    error.message = languagelist.zipvalid;
  }else  if ((data.phone != undefined) && /^\d+$/.test(data.phone) == false) {
    error.message = languagelist.phonevalid;
  }else  if ((data.email != undefined) && !data.email.match(mailformat)) {
    error.message = languagelist.emailvalid;
  }else  if ((data.id_type != undefined) && data.id_type == '') {
    error.message = languagelist.idtypevalid;
  }else  if ((data.id_number != undefined) && data.id_number == '') {
    error.message = languagelist.idnumbervalid;
  }

  return {
    error,
    isValid: isEmpty(error),
  };
}

