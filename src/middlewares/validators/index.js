import { validationResult } from 'express-validator';
import mongoSanitize from 'express-mongo-sanitize';

const validateRequest = (req, res, next) => {
  mongoSanitize()(req, res, () => {});

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  next();
};

export default validateRequest;
