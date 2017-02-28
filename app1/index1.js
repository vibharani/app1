var app = angular.module('myApp',[]);
app.factory('calcFactory',['$http',function($http){
	var oCalcService = {};
	var baseurl='http://localhost:3000/data1';
	oCalcService.doCall1=function(){
	return $http.get(baseurl);
	};
	return oCalcService;
}]);

app.controller('DropCtrl2',['$scope','calcFactory',function($scope,calcFactory){
	calcFactory.doCall1().then(function(response){
			$scope.y= response.data;  
		});
}]);