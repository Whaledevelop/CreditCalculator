'use strict';

angular
    .module('creditCalcApp')
    .config(['$locationProvider' ,'$routeProvider', config])

function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/credit_calculator', {
            template: '<calc-body></calc-body>'
        })
        .otherwise('/credit_calculator');
}
