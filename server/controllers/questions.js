var Question = mongoose.model('Question');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Users - Index")
			Question.find({}, function(err, questions){
				if(err){
					console.log(err);
					response.json([{name:"Updating, please be patient..."}]);
				}
				else{
					console.log(questions);
					response.json(questions);
				}
			})
		},
		new: function(request, response){
			console.log("Server / Ctrl / Questions - New")
		},
		create: function(request, response){
			console.log("Server / Ctrl / Questions - Create", request.body)
			var question = new Question;
			question.name = request.body.name;
			question.question = request.body.question;
			question.description = request.body.description;
			question.save(function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		},
		edit: function(request, response){
			console.log("Server / Ctrl / Questions - Edit")
		},
		update: function(request, response){
			console.log("Server / Ctrl / Questions - Update", request.body)
			Question.findOneAndUpdate({_id:request.params.id}, {$push: {answers: request.body}}, function(err, record){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		},

		updateLike: function(request, response)
		{
			console.log("SERVER / CTL / UPdate like")
			Question.findOneAndUpdate({_id:request.params.id}, { '$set': { 'answers.$.name': "Bodde",}}, function(err, record)
			{
				if (err)
				{
					console.log(err);
					response.json({status:false});
				}
				else
				{
					response.json({status:true});
				}
			})
		},

		show: function(request, response)
		{
			console.log('server/trl/show', request.params.id);
			Question.findOne({_id:request.params.id}, function(err, question)
			{
				if(err){
					console.log(err);
				}
				else{
					console.log('question', question);
					response.json(question);
				}
			})
		},

		destroy: function(request, response){
			console.log("Server / Ctrl / Users - Destroy");
			console.log("Destroy params id:", request.params.id);
			Question.remove({_id:request.params.id}, function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}
	}
})();