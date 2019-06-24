
const express = require('express');
const router = express.Router();
const flash = require('connect-flash');

router.use(express.urlencoded({extended: true}));

//router
let users = require('./users.js');
router.use('/users', users);

let comment = require('./comment.js');
router.use('/comment', comment);

let booking = require('./book.js')
router.use('/book', booking);

router.get("/layout", function(req,res){
  res.render('layout.pug', {title:'Caterina Clayton Modeling'});
})

//////
router.get("/",function(req,res){
  console.log(req.session);
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
 
