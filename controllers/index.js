//CONTROLLER INDEX
const User = require('../models/bucketlist-trip');

//calling index renders the index (home) page
function index(req, res, next) {
    User.find({}, function(err, users) {
     res.render('index', {
      users,
      user: req.user
      });
   });
  }


module.exports = {
    index
}