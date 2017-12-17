angular.module('app')
	.service('LaptopService', function(){
		var all = [
				{
					number: 1,
					afb: "https://i1.wp.com/www.chriswrites.com/wp-content/uploads/imac1.png?fit=256%2C256",
					type: "Mac",
					price: 1000
				},
				{
					number: 2,
					afb: "https://i.pinimg.com/736x/95/98/c5/9598c556c321209ed75b1852c4b8f9d9--laptop-repair-computer-repair.jpg",
					type: "Windows",
					price: 800
				},
				{
					number: 3,
					afb: "https://i.pinimg.com/736x/4a/da/5b/4ada5ba30a68011d101ecc9ed0f203f9--pc-gamer-linux.jpg",
					type: "Linux",
					price: 400
				}
			];

		this.getAll = function(){
			
			return all;
		};

		
		
	});