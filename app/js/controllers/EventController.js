'use strict';

eventsApp.controller('EventController',
    function EventController ($scope, eventData, $routeParams, $route) {
        $scope.sortorder = 'name';
        //$scope.event = $route.current.locals.event;
        $scope.event = eventData.getEvent($routeParams.eventId);

        // $route.current.pathParams only include parameters on the route.
        // $route.current.params includes both query string and route params.
        console.log($route.current.pathParams.eventId);

        $scope.reload = function () {
            $route.reload();
        };

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);