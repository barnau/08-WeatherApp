(function() {
    'use strict';

    angular
        .module('app')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http'];

    /* @ngInject */
    function WeatherFactory($http) {
        var service = {
            getWeatherData: getWeatherData
        };
        return service;

        ////////////////
        

        function getWeatherData(cityName) {
        	return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=ed5f487c18c10403c896daa2dcacbfc6&units=imperial');
        }
    }
})();

