//BUCKETLISTS CONTROLLER

//pulls in bucketlist-trip model
const User = require('../models/bucketlist-trip');

//calling index will render all found bucket list trips in the url of bucketLists/index (aka 'bucketLists/')

//Exporting all of the functions created above
module.exports = {
    newTrip,
    create,
    details,
};

// function allTrips(req, res){
//     User.find({}, function (err, trip){
//         if (err) return res.send(err);
//         res.render('trips/index', {
//             trip,
//         });
//     });
// }
    


//Calling newFlight will render url of flights/new
function newTrip(req, res) {
    res.render('user/trips/new', 
         {userId: req.params.id})
};

//Calling create will make a new trip out of the 'trip' model required at top, and then will save and then redirect to bucketLists/new
function create(req, res){
    req.body.user = req.params.id,
        User.create(req.body, function (err, trips) {
            res.redirect(`/user/${trips.user._id}`);
        });
    }
    
//Calling details with find the trip created by the imported model through its ID, then will call function to render 'trips/details', with a title of Trip Detail and show the trip details/activities or ID
function details(req, res){
    User.findById(req.params.id, function(err, user) {
        Trips.find({user: user._id}, function(err, trips) {
        res.render('user/show', {user, trips})
             })
        })
    }
