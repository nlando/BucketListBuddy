//SERVER.JS

require(dotenv).config();

//Pulling in Express
const express = require('express');

//Makes express a variable that can be used
const app = express();

//Sets views to ejs
app.set('view engine', 'ejs');

//Pulls in index route
const indexRouter = require('./routes/index');

//Pulls in trips router
const tripsRouter = require('./routes/trips');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log(req.url, res.method);
    next();
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