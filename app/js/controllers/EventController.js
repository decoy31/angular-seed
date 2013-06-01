'use strict';

eventsApp.controller('EventController',
    function EventController ($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                state: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass'
                },
                {
                    name: 'Scopes for fun and profit'
                },
                {
                    name: 'Well Behaved Controllers'
                }
            ]
        };
    }
);