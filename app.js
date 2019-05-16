const express = require("express");
const app = express();
const routes = require('./routes/index');
const path = __dirname + '/views/';



app.set('views', path);
app.set('view engine', 'pug');

//Allows express to access public folder
app.use(express.static('public'));

app.use('/', routes);

  // Handle 404
app.use(function(req, res) {
   res.status(400);
   res.render('404.pug', {title: '404: File Not Found'});
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

module.exports = app;