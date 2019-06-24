
const express = require('express');
const app = express();
const router = require('./routes/index');
const path = __dirname + '/views/';
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const TWO_HOURS = 1000*60*60*2; 
const MongoStore = require('connect-mongo')(session);
////////////////////////
const config = {
  serverPort:  3000,
  NODE_ENV = 'development',
  dbUrl: 'mongodb://localhost/cc_modeling'
}

const IN_PROD = NODE_ENV === 'production';
////////////////////////
// Express Session middleware
app.use(session({

  secret: 'keyboard cat',
  resave: false, //don't save if unmodified
  saveUninitialized: false, //don't create sessions until something stored
  name: 'sid'
  cookie: {
    maxAge: TWO_HOURS, 
    sameSite: true, 
    secure: IN_PROD
  }
}));

//some passport shtuffz that I need to complete/fix
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next();
});
////////////
// Express Messages Middleware
app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

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
