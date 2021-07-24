//trips router is always going to be 'URL/trips/--something--'

//Pulls in express
const express = require('express');

//Creates a variable for expresses router object
const router = express.Router();

// Pulls in all the functions from flights controller
const bucketListsController = require('../controllers/bucketLists');

//On / URL, gets/calls index function from flights controller, which renders all the found flights on the URL of flights/
router.get('/', bucketListsController.index);

// //On /new URL, gets/calls new function from flights controller, which renders flights/new with the title of Add Flight
// router.get('/new', bucketListsController.new);

// //On /:id URL, gets/calls show function from flights controller, which renders flights/show with the found flight --DETIALS PAGE--
// router.get('/:id', bucketListsController.details);

// //On / URL, gets/calls create function from the flights controller, which creates and saves from the flight model
// router.post('/', bucketListsController.create);

//exports all the routers from this page
module.exports = router;