angular.module('app')
	.service('HttpService', function($http, $q){
		var url = "https://api.github.com/orgs/angular/repos";
		this.get = function(){
			var def = $q.defer();
			$http.get(url)
				.then(function(response){
					// console.log(response);
					def.resolve(response);
				}), function(response){
					console.log("error");
					def.reject("fail");
				}
			return def.promise;
		}
	});