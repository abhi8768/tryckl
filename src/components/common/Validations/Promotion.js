import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

import { MANDATORY_FIELD, MANDATORY_MEDIA, MANDATORY_PAYMENT } from './customMessages';

// Signin validation
export default function validateInput(data) {
  const error = {};
  //console.log(data);
  if (data.promotion_name == '') {
    error.message = MANDATORY_FIELD;
  }else if(data.promotion_description == ''){
    error.message = MANDATORY_FIELD;
  }else if ((data.media_files.length == 0 ) &&  (data.file_list.length == 0 ) ){
    error.message = MANDATORY_MEDIA;
  }else if ((data.payment_mode == '' ) && (data.budget_type != "Free")){
    error.message = MANDATORY_PAYMENT;
  }else if ((data.start_date == null ) || (data.end_date == null)){
    error.message = 'Select proper date';
  }

  return {
    error,
    isValid: isEmpty(error),
  };
}
