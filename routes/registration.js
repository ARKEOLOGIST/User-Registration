const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/user-controller');

const router = express.Router();

router.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods','*');
  next();
});

router.post(
  '/registration',
  [
    check('name')
      .not()
      .isEmpty(),
    check('address')
      .not()
      .isEmpty(),
      check('phone_number')
      .not()
      .isEmpty(),
      check('phone_number')
      .isLength({ min: 10, max: 10 }),
      check('identity')
      .not()
      .isEmpty(),
      check('reason')
      .not()
      .isEmpty()
  ],
  usersController.signup
);

module.exports = router;
