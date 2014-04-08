'use strict';

// src: http://jsfiddle.net/aoclabs/xjhKu/

angular.module('myApp')

.factory('AngularIssues', function($resource) {
    return $resource('https://api.github.com/repos/angular/angular.js/issues/:number', {
        number: '@number'
    }, {
        getIssue: {
            method: 'GET',
            params: {
                number: 0
            }
        }
    })
});
