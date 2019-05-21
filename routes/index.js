const express = require('express');

const router = express.Router();


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

router.get("/review",function(req,res){
  res.render("review.pug");
});

router.get("/login",function(req,res){
  res.render("login.pug");
});

module.exports = router;