module.exports = function(app) {
  	var questions = require('../controllers/questions.js');
	app

	// - - - Questions - - -
    // Index
	.get('/questions', function(request, response) { questions.index(request, response) })
	// New
	.get('/questions/new', function(request, response) { questions.create(request, response) })
	// Show
	.get('/questions/:id', function(request, response) {
		console.log('request');
		questions.show(request, response) })
	// Edit
	.post('/questions/:id/edit', function(request, response) { questions.update(request, response) })
	// Create
	.post('/questions', function(request, response) { questions.create(request, response) })
	// Destroy
	.delete('/questions/:id', function(request, response) { questions.destroy(request, response) })
	// Update
	.put('/questions/:id', function(request, response) { questions.update(request, response) })
	//Update Likes
	.put('/questions/:id/like', function(request, response){questions.updateLike(request, response)})
};