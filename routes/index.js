//INDEX ROUTE

//Pulls in express
const express = require('express');

//Creates a variable from the router object of express
const router = express.Router();

//Require passport middleware
const passport = require('passport');

//Pulls in index controller
const indexControl = require('../controllers/index');

//On plain / URL, get/call index function from index controller
router.get('/', indexControl.index);

//routes for google oath
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/students',
      failureRedirect : '/'
    }
  ));
  
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
 
 

//Exports all the routers from this page 
module.exports = router;