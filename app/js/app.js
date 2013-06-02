'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: '/templates/NewEvent.html',
                controller: 'EditEventController'
            });

        $routeProvider.when('/events',
            {
                templateUrl: '/templates/EventList.html',
                controller: 'EventListController'
            });

        $routeProvider.when('/events/:eventId',
            {
                templateUrl: '/templates/EventDetails.html',
                controller: 'EventController'
            });

        // Default Route
        $routeProvider.otherwise({ redirectTo: '/events'});

        $locationProvider.html5Mode(true);
    });