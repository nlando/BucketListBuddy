//CONTROLLER INDEX

//calling index renders the index (home) page
function index(req, res, next) {
    User.find({}, function(err, users) {
     res.render('user/index', {
      users,
      user: req.user
      });
   });
  }

//Exports index function
module.exports = {
    index
}