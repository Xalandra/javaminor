angular.module('app')
	.factory('LaptopFactory', function(){
		var computer = {};

		var rams = [
			{
				"name" : "RAM special edition 4GB",
				"price" : 78.35
			},
			{
				"name" : "RAM normal edition 8GB",
				"price" : 117.75
			},
			{
				"name" : "RAM extended edition 16GB",
				"price" : 167.18
			},
			{
				"name" : "RAM rare edition 32GB",
				"price" : 245.99
			}
		];
		var ssds = [
			{
				"name" : "SSD 64GB",
				"price" : 174.28
			},
			{
				"name" : "SSD 125GB",
				"price" : 205.00
			},
			{
				"name" : "SSD 250GB",
				"price" : 299.95
			},
			{
				"name" : "SSD 250GB special edition",
				"price" : 339.95
			}
		];
		var processors = [
			{
				"name" : "Intel i3",
				"price" : 269.00
			},
			{
				"name" : "Intel i5",
				"price" : 384.99
			},
			{
				"name" : "Intel i7",
				"price" : 499.95
			},
			{
				"name" : "AMD sumthing",
				"price" : 375.00
			}
		];
		var types = ["Windows","Mac","Linux"];

		computer.initRandomPc = function(){
			var i = Math.floor((Math.random()*3)+1);
			// console.log(i);

			computer.getImage(i);
			computer.type = types[(i-1)];

			
			computer.ram = rams[giveRandom()];
			computer.ssd = ssds[giveRandom()];
			computer.processor = processors[giveRandom()];

			var price1 = computer.ram["price"];
			var price2 = computer.ssd["price"];
			var price3 = computer.processor["price"];
			// console.log(price1 + "+" + price2 + "+" price3);
			var total = (price1 + price2 + price3);

			computer.price = Number(total).toFixed(2);

			return computer;
		}

		function giveRandom(){
			return Math.floor((Math.random()*3)+0);
		}

		computer.getImage = function(number){
	        switch (number) {
	            case 1: //windows
	                computer.image = "https://i.pinimg.com/736x/95/98/c5/9598c556c321209ed75b1852c4b8f9d9--laptop-repair-computer-repair.jpg";
	                break;
	            case 2: //mac
	                computer.image = "https://i1.wp.com/www.chriswrites.com/wp-content/uploads/imac1.png?fit=256%2C256";
	                break;
	            default: //linux
	            	computer.image = "https://i.pinimg.com/736x/4a/da/5b/4ada5ba30a68011d101ecc9ed0f203f9--pc-gamer-linux.jpg";
	            	break;
            }

        }

		return computer;


	});