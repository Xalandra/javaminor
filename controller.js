angular.module('app')
	.config(function($routeProvider){
		$routeProvider
			.when('/index', {
				templateUrl: 'home.html',
				controller: 'MainController',
				controllerAs: 'app'
			})
			.when('/config/:pc', {
				templateUrl: 'config.html',
				controller: 'ConfigController',
				controllerAs: 'app'
			})
			.when('/test', {
				templateUrl: 'test.html'
			})
			.otherwise({
				redirectTo: '/index'
			});
		});

angular.module('app')
	.controller('MainController', function(LaptopService, LaptopFactory, HttpService, HttpFactory){
		var self = this;
		this.title = "Opdracht 1";
		this.httpResults = "API call";

		var res = {};

		this.restCall = function(){
			HttpService.get()
				.then(function(data){
					console.log(data.data);
					res = data.data;
					self.httpResults = res[5];
				});
		}


		this.getAllList = LaptopService.getAll();
		// console.log(getAllList);

		console.log(LaptopFactory.initRandomPc());

		this.config = function(chosenLaptop){
			console.log("Nummer " + chosenLaptop + " is gekozen");
			
			window.location = "/javaminor_opdracht1/#/config/" + chosenLaptop;
		}

		this.javaResult = "java";
		this.javaCall = function(){
			HttpFactory.java()
				.then(function(data){
					self.javaResult = data;
				})
		};
	});

angular.module('app')
	.controller('ConfigController', function($routeParams){
		var self = this;
		var param = $routeParams.pc;
		this.title = "Opdracht 1: config pc " + param;

	});

