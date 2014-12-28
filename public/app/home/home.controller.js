(function() {

	angular
		.module('feed-me')
		.controller('HomeController', HomeController);

	function HomeController() {
		var vm = this;

		vm.tagline = 'Hello World';
	}

})();