const express = require('express');
const router = express.Router();

// Comment model
const Comment = require('../models/Comment');

router.get("/",function(req,res){
    res.render("comment.pug");
  });

// new comment form
router.get('/add', function(req, res){
  res.render('add_comment', {
    title: 'Add Comment'
  });
});

// submit new comment
router.post('/add', function(req, res){
  // Express validator
  req.checkBody('author', 'Name is required').notEmpty();
  req.checkBody('body', 'Thoughts are required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is required').isEmail();
  // Get errors
  let errors = req.validationErrors();

  if(errors){
    res.render('add_comment', {
      title: 'Add Comment',
      errors: errors
    });
  } else {
    let comment = new Comment();
    comment.author = req.body.author;
    comment.body = req.body.body;
    comment.email = req.body.email; 
    
    comment.save(function(err){
      if(err) {
        console.error(err);
        return;
      } else {
        req.flash('success', 'Comment Added');
        res.redirect('/');
      }
    });
  }
});



module.exports = router;