'use strict';

eventsApp.factory('eventData', function ($http, $q) {
    return {
        /**
         * Gets the stored event.
         *
         * @returns {promise} Returns a promise object.
         */
        getEvent: function (id) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: '/data/event/' + id
            })
                .success(function (data, status, headers, config) {
                    //$log.info(data, status, headers(), config);
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    //$log.warn(data, status, headers(), config);
                    deferred.reject(status);
                });

            return deferred.promise;
        }
    };
});