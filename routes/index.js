
const express = require('express');
const routes = express.Router();
//Register User model with our app.
const user = require('./models/User');

routes.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

routes.get("/layout", function(req,res){
    res.render('layout.pug', {title:'Caterina Clayton Modeling'});
})

//Once in pug files, use res.render('filename', {xxxxx})
routes.get("/",function(req,res){
  res.render("portfolio.pug");
});

routes.get("/book",function(req,res){
  res.render("book.pug");
});

routes.get("/review",function(req,res){
  res.render("review.pug");
});

routes.get("/login",function(req,res){
  res.render("login.pug");
});

routes.get("/signup",function(req,res){
  res.render("signup.pug");
});

module.exports = routes;