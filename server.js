//SERVER.JS

require(dotenv).config();

//Pulling in Express
const express = require('express');

//Makes express a variable that can be used
const app = express();

//Sets views to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log(req.url, res.method);
    next();
});



//Server uses indexRouter at url of /
app.use('/', indexRouter);

//Server uses flistsRouter at url of /lists
app.use('/lists', listsRouter);

const PORT = 4000;

//Server listen at localhost://port
app.listen(port, () => {
    console.log(`reporting live from localhost://${port}`)
})