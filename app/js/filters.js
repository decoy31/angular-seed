'use strict';

eventsApp.filter('durations', function () {
    return function (duration, prop) {
        switch (duration) {
        case 1:
            return {
                'class': 'icon-arrow-down',
                'title': 'Half Hour'
            }[prop];
        case 2:
            return {
                'class': 'icon-chevron-down',
                'title': '1 Hour'
            }[prop];
        case 3:
            return {
                'class': 'icon-chevron-up',
                'title': 'Half Day'
            }[prop];
        case 4:
            return {
                'class': 'icon-arrow-up',
                'title': 'Full Day'
            }[prop];
        default:
            return {
                'class': '',
                'title': ''
            }[prop];
        }
    };
});