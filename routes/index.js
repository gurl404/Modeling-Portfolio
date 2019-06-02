
const express = require('express');
const router = express.Router();
const flash = require('connect-flash');
// //Register models 
// require('../models/User.js');
// require('../models/Comment.js');

router.use(express.urlencoded({extended: true}));

//router
let users = require('./users.js');
router.use('/users', users);

let comment = require('./comment.js');
router.use('/comment', comment);

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/layout", function(req,res){
    res.render('layout.pug', {title:'Caterina Clayton Modeling'});
})

//Once in pug files, use res.render('filename', {xxxxx})
router.get("/",function(req,res){
  res.render("portfolio.pug");
});

router.get("/book",function(req,res){
  res.render("book.pug");
});

router.get("/login",function(req,res){
  res.render("login.pug");
});

router.get("/signup",function(req,res){
  res.render("signup.pug");
});


module.exports = router;
 
