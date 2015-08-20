var myApp = angular.module('myApp', [
	'ngRoute',
	'ArtistControler'
]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: "partials/list.html", 
		controller: 'ListController'
	}).
	when('/details/:itemId', {
		templateUrl: 'partials/details.html'
		,controller:'detailsController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);