"use strict";

// While not in this case, it is generally bad practice to
// use $ for creating angular object names.
eventsApp.factory('$exceptionHandler', function () {
    return function (exception) {
        console.warn('exception handled: ' + exception.message);
    };
});