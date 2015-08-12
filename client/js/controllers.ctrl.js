app.controller('MainController', function(){
	console.log("MainController Loaded");

})

app.controller('QuestionsController', function($location, $rootScope, $scope, $routeParams, QuestionFactory){
	console.log("QuestionsController Loaded");
	var that = this;

	var getQuestions = function(){
		QuestionFactory.getQuestions(function(questions){
			that.questions = questions;
		});
	}
	getQuestions();

	this.add = function(newQuestion){
		console.log('add new question', newQuestion);
		newQuestion.name = $rootScope.gvname;
		QuestionFactory.add(newQuestion, function(){
			alert("Message Successfully Added");
			$location.path('/');
			getQuestions();
		})
	}

	var getQuestion = function(id)
	{
		QuestionFactory.getQuestion(id, function(question)
			{
				that.post = question;
			});
	}
	console.log('exeucting get question');
	getQuestion();

	this.addAnswer = function(newAnswer)
	{
		console.log('Add Answer', $routeParams);
		newAnswer.name = $rootScope.gvname;
		var id = $routeParams._id;
		var that=this;

		QuestionFactory.update(id, newAnswer, function()
		{
			alert("Answer Successfully Added", id);
			$location.path('/question/' + id);
		})
	}

	this.addLike = function(likeID)
	{
		console.log('add like', likeID);
		var that = this;

		QuestionFactory.updateLike(likeID, function()
		{
			console.log('added like');
			// $location.path('/question/' + likeID);
		})
	}

	this.remove = function(user){
		UserFactory.remove(user, function(){
			getUsers();
		})
	}
	// this.show = function(question){
	// 	QuestionFactory.setQuestion(Question);
	// }
})

app.controller('QuestionController', function($rootScope, $scope, $routeParams, $route, QuestionFactory)
{
	console.log('QC Loaded', $routeParams);
	var id = $routeParams._id;
	var that = this;
	var getQuestion = function(id)
	{
		QuestionFactory.getQuestion(id, function(question)
			{
				that.post = question;
			});
	}
	console.log('exeucting get question');
	getQuestion();
})

