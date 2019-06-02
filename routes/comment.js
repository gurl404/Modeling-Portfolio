const express = require('express');
const router = express.Router();

// Comment model
const Comment = require('../models/Comment');

router.get("/",function(req,res){
    res.render("comment.pug");
  });

// new article form
router.get('/add', function(req, res){
  res.render('add_comment', {
    title: 'Add Comment'
  });
});

// submit new comment
router.post('/add', function(req, res){
  // Express validator
  req.checkBody('author', 'Author is required').notEmpty();
  req.checkBody('body', 'Body is required').notEmpty();
  
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

// load edit form
router.get('/edit/:id', function(req, res){
  Comment.findById(req.params.id, function(err, comment){
    res.render('edit_comment', {
      title: 'Edit Comment',
      comment: comment
    });
  });
});

// update submit new comment
router.post('/edit/:id', function(req, res){
  let comment = {};
  comment.author = req.body.author;
  comment.body = req.body.body;

  let query = {_id: req.params.id};

  Comment.update(query, comment, function(err){
    if(err) {
      console.error(err);
      return;
    } else {
      req.flash('success', 'Comment Updated');
      res.redirect('/');
    }
  })
});

// Delete post
router.delete('/:id', function(req, res){
  let query = {_id: req.params.id};

  Comment.remove(query, function(err){
    if(err) {
      console.error(err);
      return;
    } else {
      req.flash('success', 'Comment Deleted')
      res.send('Success');
    }
  });
});

// get single comment
router.get('/:id', function(req, res){
  Comment.findById(req.params.id, function(err, comment){
      console.log(comment);
    res.render('comment', {
      comment: comment
    });
  });
});

module.exports = router;