// const express = require('express');
// const router = express.Router();
// // User model
// const Comment = require('../models/Comment');

// // Register form
// router.get('/Comment', function(req, res){
//   res.render('Comment');
// });

// // Register process
// router.post('/Comment', function(req, res){
//   const comment= req.body.comment;


//   req.checkBody('Comment', 'Comment is required').notEmpty();
//   //Add way to list username if user is signed in

//   let errors = req.validationErrors();

//   if(errors){
//     res.render('comment', {
//       errors: errors
//     });
//   } else {
//     //Add comment mechanics. Save to db. 
//     let Comment = new Comment({
//       comment: comment, 

//     });

//         newUser.save(function(err){
//           if(err) {
//             console.error(err);
//             return;
//           } else {
//             req.flash('success', 'You are now registered and can log in');
//             res.redirect('/users/login');
//           }
//         });
//       });
//     })
//   }
// });


// module.exports = router;