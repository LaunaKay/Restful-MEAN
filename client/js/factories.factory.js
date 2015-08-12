app.factory('QuestionFactory', function($http, $location, $routeParams, $route){
	return {
		getQuestions: function(callback){
			console.log("QuestionsFactory getQuestions");
			$http.get('/questions').success(function(response){
				callback(response);
			})
		},

		getQuestion: function(id, callback)
		{
			console.log("QF get1", $routeParams);
			console.log('fact', $routeParams._id);
			$http.get('/questions/' + $routeParams._id ).success(function(response)
			{
				console.log(response);
				callback(response);
			})
		},

		add: function(newQuestion, callback){
			if(newQuestion)
			{
				console.log("QuestionsFactory add ", newQuestion);
				$http.post('/questions', newQuestion).success(function(response)
				{
					callback(response);
				})
			}
		},
	// 	remove: function(user, callback){
	// 		console.log("UsersFactory remove ", user);
	// 		$http.delete('/users/'+user._id).success(function(response){
	// 			callback();
	// 		})
		// },

		update: function(id, newAnswer, callback)
		{
			console.log("QF update ", newAnswer);
			console.log('QF update id', id);
			$http.put('/questions/'+ id, newAnswer).success(function(response)
			{
				console.log('updated answer');
				callback(response);
			})
		},

		updateLike: function(id, callback)
		{
			console.log('QF update like', id);
			$http.put('/questions/' + id + '/like').success(function(response)
			{
				console.log('updated likes');
				callback(response);
			})
		}
		// setQuestion: function(question){
		// 	this.question = question;
		// 	$location.path('/question/:_id');
		// },
		// getQuestion: function(){
		// 	if(!this.question)
		// 		$location.path('/');
		// 	return this.question;
		// }
	}
})