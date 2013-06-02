"use strict";

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController ($scope, $locale) {

        console.log($locale);
        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

        // Test throwing an exception and having it handled
        // by the ExceptionHandler service.
        //throw { message: 'error message' };
    }
);