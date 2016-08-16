(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['WeatherFactory', 'toastr'];

    /* @ngInject */
    function MainController(WeatherFactory, toastr) {
        var main = this;
        main.title = 'MainController';

        main.test = "This is a test.";

        main.history = [];

        

        main.getCityData = function(city) {
        	console.log('getCityData running...' + city)
        	WeatherFactory.getWeatherData(city).then(
	        function(response) {

                var inputCity = main.city.toLowerCase();
                var responseCity = response.data.name;
                responseCity = responseCity.toString();
                responseCity = responseCity.toLowerCase();
                

                if(response.cod === 404 || inputCity !== responseCity) {
                     toastr.error('Invalid city name.', 'Error');
                } else {
                    main.weatherData = response.data;
                   console.log(main.weatherData);

                   var d = new Date();
                   var date = d.toDateString();
                   var time = d.toTimeString(); 

                   time = time.substring(0,9);
                   
                   
                   main.history.push({

                    city: response.data.name,
                    date: date,
                    time: time
                   });

                }
	        	
	           
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