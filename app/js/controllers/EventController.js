'use strict';

eventsApp.controller('EventController',
    function EventController ($scope, eventData) {

        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent(1);

        $scope.event.then(function (event) {
            console.log(event);
        }, function (status) {
            console.warn(status);
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);