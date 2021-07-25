//SERVER.JS

require('dotenv').config();

//Pulling in Express
const express = require('express');

//Middleware
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');

//Makes express a variable that can be used
const app = express();

//Mongodb and mongoose connection
require('./config/database');
require("./config/passport");
//Sets views to ejs
app.set('view engine', 'ejs');

//Pulls in index route
const indexRouter = require('./routes/index');

//Pulls in trips router
const tripsRouter = require('./routes/trips');

app.use(express.static('public'));
app.use(express.json());

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'BUCKETlistBUDDY',
    resave: false,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());
});


//Server uses indexRouter at url of /
app.use('/', indexRouter);

//Server uses tripsRouter at url of /trips
app.use('/trips', tripsRouter);

//Server listen at localhost://port
const port = 4000;

app.listen(port, () => {
    console.log(`reporting live from localhost://${port}`)
})