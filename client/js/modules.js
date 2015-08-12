var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'QuestionsController',
		controllerAs: 'getQ',
		templateUrl: '/partials/home.partial.html'
	})
	.when('/new_question', {
		controller: 'QuestionsController',
		controllerAs: 'newq',
		templateUrl: '/partials/newquestion.partial.html'
	})
	.when('/question/:_id', {
		// controller: 'UserController',
		// controllerAs: 'userCtrl',
		templateUrl: '/partials/question.partial.html'
	})
	.when('/question/new_answer/:_id',
	{
		templateUrl: '/partials/newanswer.partial.html'
	})
	.when('/logout',
	{
		templateUrl: '/partials/home.partial.html'
	})

	.otherwise('/')
})

app.run(function ($rootScope) {
    $rootScope.gvname = name; //global variable
});