//BUCKETLISTS CONTROLLER

//pulls in bucketlist-trip model
const trip = require('../models/bucketlist-trip');

//calling index will render all found bucket list trips in the url of bucketLists/index (aka 'bucketLists/')

function index(req, res){
    trip.find({}, function (err, trips){
        if (err) return res.send(err);
        res.render('trips/', {
            trips,
        });
    });
}

//Calling newFlight will render url of flights/new
function newTrip(req, res) {
    res.render('trips/new', {
        title: 'Add Bucket List Trip'
    });
};

//Calling create will make a new trip out of the 'trip' model required at top, and then will save and then redirect to bucketLists/new
function create(req, res){
    const newTrip = new trip(req.body);
    newTrip.save(function(err) {
        if (err) return res.send(err);
        res.redirect('/trips/new');
    });
}

//Calling details with find the trip created by the imported model through its ID, then will call function to render 'trips/details', with a title of Trip Detail and show the trip details/activities or ID
function details(req, res){
    trip.findById(req.params.id, function(err, trip) {
        res.render('trips/show', {title: 'Trip Activities', trip});
    });
}

//Exporting all of the functions created above
module.exports = {
    index,
    new: newTrip,
    create,
    details,
}