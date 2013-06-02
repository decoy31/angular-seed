'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider.when('/NewEvent',
            {
                templateUrl: 'templates/newEvent.html',
                controller: 'EditEventController'
            });
    });