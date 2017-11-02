const express = require('express')
const router = express.Router()
const newsController = require('../controllers/newsController')



router.post('/:id/comment', function(req, res, next) {
	const id = req.params.id;

	newsController.createComment(id, req.userData.username, req.body.body, function(err, result){
		if(err){  
			console.log(err);
			res.json({
				success: 0,
				error: err
			})
			return;
		}

		console.log('creating comment');

		res.json({
			success: 1,
			data: result
		});
	});

});


router.post('/', function(req, res, next) {
	newsController.create(req.body, function(err, result){
		if(err){  
			console.log(err);
			res.json({
				success: 0,
				error: err
			})
			return;
		}

		console.log('created');

		res.json({
			success: 1,
			data: result
		});
	});

});


router.get('/', function(req, res, next) {

	newsController.find(req.query, function(err, results){
		if(err){
			console.log(err);
			res.json({
				success: 0,
				error: err
			});
			return;
		}
		res.json({
			success: 1,
			data: results
		});
	});
});


router.get('/:id', function(req, res, next){
	var id = req.params.id;

	newsController.findById(id, function(err, result){
	
		if(err){
			console.log(err);
			res.status(500).json({
				success: 0,
				data: result
			});
			return;
		}

		res.status(200).json({
			success: 1,
			data: result
		});
	});
});

module.exports = router

