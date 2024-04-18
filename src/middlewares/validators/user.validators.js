import { check } from 'express-validator';
import validateRequest from './index.js';

const nameValidator = check('name', 'Name should not be empty').notEmpty();

const emailValidator = check('email', 'Please provide a valid email address')
  .notEmpty()
  .withMessage('Email should not be empty')
  .bail()
  .isEmail();

const ageValidator = check('age', 'Age should be numeric and cannot be empty')
  .notEmpty()
  .withMessage('Age should not be empty')
  .bail()
  .isNumeric();

export const userValidator = [
  nameValidator,
  ageValidator,
  emailValidator,
  validateRequest,
];
