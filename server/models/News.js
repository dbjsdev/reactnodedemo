const mongoose = require('mongoose');  
const CommentSchema = require('./Comment').schema;  

const NewsSchema = new mongoose.Schema({  
	title: String,
	teaser: String,
	body: String,
	status: {
    	type: Number,
	    default: 1
  	},
	created: {
		type: Date,
		required: true,
		default: new Date()
	},
	comments: [CommentSchema]
});

mongoose.model('News', NewsSchema);

module.exports = mongoose.model('News');