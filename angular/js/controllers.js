
	//console.log('d')
var ArtistControler = angular.module('ArtistControler',[]);


ArtistControler.controller('ListController', ['$scope', '$http', function($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.artists =data;
		$scope.artistOrder = 'name';
	})
	
}]); 



ArtistControler.controller('detailsController', ['$scope', '$http', '$routeParams',  function($scope, $http, $routeParams){
	$http.get('js/data.json').success(function(data){
		$scope.artists =data;
		//$scope.artistOrder = 'name';
		$scope.whichItem = $routeParams.itemId;
	})
	
}]); 

