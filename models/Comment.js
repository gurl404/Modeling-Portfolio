const mongoose = require('mongoose');

// Comment schema
const CommentSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment; 