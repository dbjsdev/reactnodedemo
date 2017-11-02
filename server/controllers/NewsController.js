
const News = require('../models/News')
const Comment = require('../models/Comment')

module.exports = {

	create: function(params, callback){

		News.create(params, function(err, result){
			if(err){
				callback(err, null);
				return
			}
			callback(null, result);
		});
	},
	find: function(params, callback){
		News.find(params,'_id title teaser', function(err, results){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, results);
		})
	},

	findById: function(id, callback){
		News.findById(id, function(err, results){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, results);
		})
	},
	createComment: function(id, username, body, callback){
		News.findById(id, function(err, result){
			if(err){
				callback(err, null);
				return;
			}
			
			var comment = new Comment({username: username, body: body});

			result.comments.push(comment);
			
			result.save(function(err, commentResult){
				if(err){
					callback(err, null);
					return;
				}

				callback(null, commentResult);
			});
		});

	}
}