var express = require('express');
var router = express.Router();
var request = require('request')
var passport = require('passport');
var UserManager = require('../../managers/user');
var userManager = new UserManager();


router.use(require('body-parser').json());
router.use(require('cors')());

router.post('/chatGetUserInfo', passport.authenticate('facebook-token', {session: false}), function(req, res) {
  console.log('inside /chatGetUserInfo in user controllers index.js');
  console.log('req.body:',req.body);
  userManager.chatGetUserInfo(req.body.userID)
  .then(function(body) {
    console.log('body inside userController index.js', body);
    res.send(body);
  })
});

module.exports = router;