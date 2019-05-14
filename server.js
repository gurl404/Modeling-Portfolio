var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "portfolio.html");
});

router.get("/book",function(req,res){
  res.sendFile(path + "book.html");
});

router.get("/review",function(req,res){
  res.sendFile(path + "review.html");
});

router.get("/login",function(req,res){
    res.sendFile(path + "login.html");
  });

  app.use("/",router);

  // Handle 404
  app.use(function(req, res) {
    res.status(400);
   res.render('404.jade', {title: '404: File Not Found'});
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});