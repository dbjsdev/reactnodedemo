const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = (req, res, next) => {

	if (!req.headers.authorization) {
		return res.status(401).end();
	}

	const token = req.headers.authorization.split(' ')[1];

	return jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {

		if (err) { 
			return res.status(401).end(); 
		}

		req.userData = {};
		req.userData.tokenID  = token;
		req.userData.userid = decoded._id;
		req.userData.username = decoded.username;

	  	return next();


	});

};
