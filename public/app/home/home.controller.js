(function() {

	angular
		.module('bootstrap')
		.controller('HomeController', HomeController);

	function HomeController() {
		var vm = this;

		vm.tagline = 'Hello World';
	}

})();