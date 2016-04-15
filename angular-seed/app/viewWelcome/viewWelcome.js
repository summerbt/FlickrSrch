'use strict';

angular.module('myApp.viewWelcome', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'viewWelcome/view-welcome.html',
            controller: 'ViewWelcomeCtrl'
        });
    }])
    .controller('ViewWelcomeCtrl', [function () {
        alert('Hello!');
}]);
