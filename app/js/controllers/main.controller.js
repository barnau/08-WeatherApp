(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['WeatherFactory'];

    /* @ngInject */
    function MainController(WeatherFactory) {
        var main = this;
        main.title = 'MainController';

        main.test = "This is a test.";

        main.history = [];

        

        main.getCityData = function(city) {
        	console.log('getCityData running...' + city)
        	WeatherFactory.getWeatherData(city).then(
	        function(response) {
	        	
	           main.weatherData = response.data;
	           console.log(main.weatherData);	
	           main.icon = "http://openweathermap.org/img/w/" + main.weatherData.weather[0].icon + ".png";

	           console.log(main.icon);
	           
	           main.history.push({

	           	city: response.data.name,
	           	date: new Date()
	           });
	        },
	        function(error) {

	        }); 
        }


        

        
        

        

        activate();

        ////////////////

        function activate() {
        }
    }
})();