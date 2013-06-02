'use strict';

eventsApp.controller('EventController',
    function EventController ($scope, eventData, $anchorScroll) {
        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent(1);
        $scope.event.then(
            function (event) {
                console.log(event);
            },
            function (response) {
                console.warn(response);
            }
        );

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function () {
            $anchorScroll();
        };
    }
);