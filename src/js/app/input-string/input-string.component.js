'use strict';

angular.module('inputString', [])
    .component('inputString', {
        templateUrl: '/templates/input-string.html',
        controller: function($scope) {
            $scope.value = 1500000
            $scope.label = 'color'
            $scope.color = 'blue'
            $scope.fontSize = 12
        }
    })