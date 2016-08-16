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
        main.history = [];

        
    main.getCityData = function(city) {
        	//Call factory to get weather data by city
        	WeatherFactory.getWeatherData(city).then(
	        function(response) {

                // create variables to confirm the returned city name matches what was typed in
                var inputCity = city.toLowerCase();
                var responseCity = response.data.name;
                responseCity = responseCity.toString();
                responseCity = responseCity.toLowerCase();
                console.log(responseCity);
                console.log(inputCity);
                
                //If full city data is not returned or city requested does not match city returned do..
                if(response.cod === 404 || inputCity !== responseCity) {
                     toastr.error('Invalid city name.', 'Error');
                //weather data returned successfully.     
                } else {
                    //add weather data to scope
                    main.weatherData = response.data;
                    
                    //create history array and set to scope
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