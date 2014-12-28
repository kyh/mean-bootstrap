(function(){

	angular
		.module('feed-me', [
			'ngRoute'
		])

		.config(config);

	function config($routeProvider, $locationProvider){

		$routeProvider

			// home page
			.when('/', {
				templateUrl: 'app/home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			})

			.when('/login', {
				templateUrl: 'app/auth/login/login.html',
				controller: 'LoginController',
				controllerAs: 'vm'
			})

			.when('/signup', {
				templateUrl: 'app/auth/signup/signup.html',
				controller: 'SignupController',
				controllerAs: 'vm'
			});

		$locationProvider.html5Mode(true);
	}

})();

// window.onload = function(){
// 	var callBtn = document.getElementById('feed-me');

// 	document.getElementById('feed-me').addEventListener('click', function(){
// 		// console.log('feeeed:', phoneInput.value, messageArea.value);
// 		sendMessage('hello');
// 	});
// };

// var Socket;
// var Constant = {
// 	socketUrl: 'localhost:8080'
// };

// function connect() {
//     Socket = new WebSocket('ws://'+Constant.socketUrl);

//     Socket.onopen = function(){
//         console.log('connection opened');
//     }

//     Socket.onmessage = function(evt) {
//     	console.log(evt);
//     }

//     Socket.onclose = function(evt) {
//         console.log('connection closed');
//     }
// }

// function sendMessage(message){
// 	var msg = {
// 		"message": message
// 	};
// 	Socket.send(JSON.stringify(msg));
// }

// connect();