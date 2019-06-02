
const express = require('express');
const app = express();
const router = require('./routes/index');
const path = __dirname + '/views/';
const mongoose = require('mongoose');
const passport = require('passport');
////////////////////////
config = {
  serverPort:  3000,
  dbUrl: 'mongodb://localhost/cc_modeling'
}
////////////////////////
//some passport shtuffz that I need to complete/fix
app.use(passport.initialize());
app.use(passport.session());

require('./path/to/passport/config/file')(passport);

//express-validator API (outdated but might work for now)
const expressValidator = require('express-validator');
app.use(expressValidator());
////

///////////////////////
app.set('views', path);
app.set('view engine', 'pug');
//Allows express to access public folder
app.use(express.static('public'));
app.use('/', router);

connect();
///////////////////

function listen() {
  app.listen(config.serverPort, () => {
    console.log("Listening on port ${config.serverPort}");
  });
}

///////////////////

//Get notified if connection is successful
function connect() {
  mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'))
    .on('disconnected', connect)
    .once('open', listen);
  mongoose.connect(config.dbUrl, {useNewUrlParser: true});
}

///////////////////////////////////////////////////////
  // Handle 404
app.use(function(req, res) {
   res.status(400);
   res.render('404.pug', {title: '404: File Not Found'});
})
//////////////////////////////////////////////////////

module.exports = app;
