import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

import { EMAIL_ADDRESS, INVALID_EMAIL_ADDRESS } from './customMessages';

// Signin validation
export function validateInput(data) {
  const errors = {};

  if (Validator.isEmpty(data.emailId)) {
    errors.emailId = EMAIL_ADDRESS;
  }

  if (!Validator.isEmail(data.emailId) && !Validator.isEmpty(data.emailId)) {
    errors.emailId = INVALID_EMAIL_ADDRESS;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
