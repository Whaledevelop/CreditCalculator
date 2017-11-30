'use strict';

angular.module('inputString', [])
    .component('inputString', {
        templateUrl: '/templates/input-string.html',
        controller: function($scope) {
            $scope.inputes = [
                {id:1, label: 'Сумма кредита', min: 20000, max: 3000000, value: 1500000},
                {id:2, label: 'Срок кредитования', min: 1, max: 60, value: 12},
                {id:3, label: 'Процентная ставка', min: 1, max: 30, value: 15}
            ]
            const regularPaymentSum = ($scope.inputes[0].value/$scope.inputes[1].value) 
            + ($scope.inputes[0].value/100 * $scope.inputes[2].value);
            $scope.regularPaymentSum = regularPaymentSum
            const returnSum = regularPaymentSum * $scope.inputes[1].value;
            $scope.returnSum = returnSum
            const overPayment = returnSum - $scope.inputes[0].value;
            $scope.overPayment = overPayment
            $scope.reports = [
                {id: 1, label: 'Вы берете', value: $scope.inputes[0].value},
                {id: 2, label: 'Вы возвращаете', value: $scope.returnSum},
                {id: 3, label: 'Переплата', value: $scope.overPayment},
                {id: 4, label: 'Срок кредитования', value: $scope.inputes[1].value},
                {id: 5, label: 'Процентная ставка', value: $scope.inputes[2].value},
                {id: 6, label: 'Сумма ежемесячного платежа', value: $scope.regularPaymentSum}
            ]
        }
    })