'use strict';

eventsApp.factory('eventData', function ($q, $resource) {
    var eventResource = $resource('/data/event/:id', {id: '@id'});

    return {
        /**
         * Gets the stored event.
         *
         * @returns {promise} Returns a promise object.
         */
        getEvent: function (id) {
            var deferred = $q.defer();

            eventResource.get({id: id},
                function (event) {
                    deferred.resolve(event);
                },
                function (response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        },
        save: function (event) {
            var deferred = $q.defer();
            event.id = 999;
            eventResource.save(event,
                function (response) {
                    deferred.resolve(response);
                },
                function (response) {
                    deferred.reject(response);
                }
            );
            return deferred.promise;
        }
    };
});