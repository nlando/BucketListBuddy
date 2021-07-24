//trips router is always going to be 'URL/trips/--something--'

//Pulls in express
const express = require('express');
const trips = require('../controllers/trips');

//Creates a variable for expresses router object
const router = express.Router();

// Pulls in all the functions from trips controller
const tripsController = require('../controllers/trips');

//On / URL, gets/calls index function from trips controller, which renders all the found flights on the URL of flights/
router.get('/', tripsController.index);

// //On /new URL, gets/calls 'new' function from trips controller, which renders trips/new with the title of Add Bucket List Trip
router.get('/new', tripsController.new);

// //On /:id URL, gets/calls details function from trips controller, which renders trips/details with the found trip --DETAILS PAGE--
router.get('/:id', tripsController.details);

// //On / URL, gets/calls create function from the trips controller, which creates and saves from the bucketlist-trip model
router.post('/', tripsController.create);

//exports all the routers from this page
module.exports = router;