//INDEX ROUTE

//Pulls in express
const express = require('express');

//Creates a variable from the router object of express
const router = express.Router();

//Pulls in index controller
const indexControl = require('../controllers/index');

//On plain / URL, get/call index function from index controller
router.get('/', indexControl.index);

//Exports all the routers from this page 
module.exports = router;