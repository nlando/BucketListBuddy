//CONTROLLER INDEX

//calling index renders the index (home) page
function index(req, res){
    res.render('index', {
        user: req.user
    });
}

//Exports index function
module.exports = {
    index
}