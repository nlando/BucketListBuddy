const User = require('../models/bucketlist-trip');

module.exports = {
    newUser,
    create,
    profile,
};



function newUser(req, res) {
    res.render('user/new')
        };

function create(req, res){
    req.body.name;
    req.body.email;
    req.body.hometown;
        
    const newUser = new User(req.body);
        
    newUser.save(function(err, user) {
        if (err) return res.send(err);
        res.redirect('/user');
                });
        }

function profile(req, res) {
    User.findById(req.params.id,
        function(err, profile){
            if(err) res.send(err);
            res.render('user/show', {profile});
        })
}        