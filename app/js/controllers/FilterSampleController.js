"use strict";

eventsApp.controller('FilterSampleController',
    // durationsFilter = $filter('durations')
    function FilterSampleController ($scope, durationsFilter) {
        $scope.data = {};
        var durationCodes = [1,2,3,4];

        for (var i = 0; i < durationCodes.length; i++) {
            var code = durationCodes[i];
            $scope.data['duration' + code] = durationsFilter(code, 'title');
        }
    }
);