const mongoose = require('mongoose'); 
const express = require('express');
const router = express.Router();
const Schema = mongoose.Schema; 


const CommentSchema = new Schema({
    body: {type: String, default: '', maxlength: 1000}, 
    user: {type: Schema.ObjectId, ref: 'User'}, 
    createdAt: {type: Date, default: Date.now}
}); 

CommentSchema.path('body').required(true, 'Comment cannot be blank.'); 
CommentSchema.methods = {

}
const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment; 
module.exports = router; 