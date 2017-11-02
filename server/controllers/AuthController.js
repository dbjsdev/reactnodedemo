const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User')

module.exports = {

	login: function(username, password, callback){

		User.findOne({ username: username }, function(err, user) {
			if(err){
				callback(err, null);
				return
			}

			if(!user){
				//User not found
				callback(err, null);
			}else{
				
	        	user.comparePassword(password, function(err, isMatch) {
					
					if(err){
						callback(err, null);
						return
					}

					if(isMatch){
						var authToken = jwt.sign({ username: user.username, _id: user._id}, process.env.JWTSECRET);
						callback(null, authToken);
					}else{
						callback(err, null);
					}
			    });
	        };

		});
	},
	register: function(username, password, callback){
		
		var newUser = new User({username,password});

		newUser.save(function(err, user) {
		    if(err){
				callback(err, null);
				return;
			}		      

			var authToken = jwt.sign({ username: user.username, _id: user._id}, process.env.JWTSECRET);
			callback(null, authToken);
		});
	}
}