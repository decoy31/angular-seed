'use strict';

eventsApp.factory('eventData', function ($q, $resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});

    return {
        /**
         * Gets the stored event.
         *
         * @param {number} eventId Event ID.
         * @returns {promise} Returns a promise object.
         */
        getEvent: function (eventId) {
            var deferred = $q.defer();

            resource.get({id: eventId},
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
            resource.save(event,
                function (response) {
                    deferred.resolve(response);
                },
                function (response) {
                    deferred.reject(response);
                }
            );
            return deferred.promise;
        },
        getAllEvents: function () {
            return resource.query();
        }
    };
});