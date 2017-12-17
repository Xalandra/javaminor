angular.module('app')
	.factory('HttpFactory', function($http, $q){
		var obj = {};
		
		obj.java = function(){
				var def = $q.defer();
				$http.get("http://localhost:8090/rest/hi", { 
						headers: {
							"Access-Control-Allow-Origin":"*", 
							"Access-Control-Allow-Methods":"GET,POST,OPTIONS", 
							"Access-Control-Allow-Headers":"Origin,Content-Type,X-Auth-Token"
						} 
					})
					.then(function(response){
						console.log(response.data);
						def.resolve(response.data);
					}), function(response){
						console.log("error");
						def.reject("fail");
					}
				return def.promise;
			}

		return obj;
	});