angular.module('noticia').controller("noticiaCtrl", function($scope, $http){
	$scope.titulo = 'Notícias';
	$scope.nome = '';
	$scope.noticias = [];

	// $http.get("http://localhost/dispositivosMoveis/servidor.php").success(function(retorno){
	// 	$scope.nome = retorno;
	// });

	/*$http.get("http://codedamn.com/filesCodedamn/news.php").success(function(retorno){
		$scope.noticias = retorno;
	});*/
});

angular.module('noticia').controller("newsCtrl", function($scope, $http){

});
