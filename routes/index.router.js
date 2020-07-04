const express = require('express');
const router = express.Router();

const cltrUser = require('../controllers/user.controler');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', cltrUser.register);
router.post('/authenticate', cltrUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, cltrUser.userProfile);


module.exports = router;