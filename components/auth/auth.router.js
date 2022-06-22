var express = require('express');
const passport = require('../../config/passport');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('auth/login',{layout:false});
});

module.exports = router;

router.post('/', passport.authenticate('local',
{ 
  successRedirect: '/dashboard',
  failureRedirect: '/?WrongInformationOrHaveBeenLocked', 
})
);

router.get('/logout', function(req, res, next) {
  req.logout();
  res.locals.currentUser = "";
  req.user = "";
  res.redirect('/');
});