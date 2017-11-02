const mongoose = require('mongoose');  


const CommentSchema = new mongoose.Schema({  
	username: String,
	body: String,
	status: {
    	type: Number,
	    default: 1
  	},
	created: {
		type: Date,
		required: true,
		default: new Date()
	}
});

mongoose.model('Comment', CommentSchema);

module.exports = mongoose.model('Comment');