//Imports
const bodyparser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();

const dbconfig = require('./server/config/dbconfig');

mongoose.Promise = Promise;
mongoose.connect(dbconfig.url);

//configuring middlewares

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));

//setting up passport

//loading passport strategies


//Authentication checker



//Setting up routes and static folders
app.use('/management', require('./server/routes/management-routes'));
app.use('/', require('./server/routes/web-routes'));

app.use(express.static('./client/dist/js'));
app.use(express.static('./server/public/'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
