const express = require('express');

const router = express.Router();


router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/layout", function(req,res){
    res.render('layout.pug', {title:'Caterina Clayton Modeling'});
})

// router.get("/",function(req,res){
//   res.sendFile(path + "portfolio.html");
// });

// router.get("/book",function(req,res){
//   res.sendFile(path + "book.html");
// });

// router.get("/review",function(req,res){
//   res.sendFile(path + "review.html");
// });

// router.get("/login",function(req,res){
//     res.sendFile(path + "login.html");
// });

module.exports = router;