"use strict";

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController ($scope, $timeout) {

        // Do not use with angular
        /*setTimeout(function () {
            $scope.name = 'John Doe';
        }, 3000);*/

        var promise = $timeout(function () {
            $scope.name = 'John Doe';
        }, 3000);

        $scope.cancel = function () {
            $timeout.cancel(promise);
            console.warn('Canceled:', promise);
        };

    }
);