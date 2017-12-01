'use strict';

angular
    .module('inputsBlock', [
        'inputsFromJson',
        'valuesStorage'
    ])
    .component('inputsBlock', {
        templateUrl: '/templates/inputs-block.html',
        controller: inputsBlockController
    })

function inputsBlockController(InputsFromJson, valuesStorage, $scope) {
    InputsFromJson.get().$promise.then(success, error);

    function success(response) {
        const initialValues = response.map(function(input) {
            return input.value
        })
        valuesStorage.setValues(initialValues)
        $scope.inputs = response
    }

    function error(response) {
        console.log (response)
    }

    $scope.handleInputs = function(id, value) {
        const inputsValues = $scope.inputs.map(function(input) {
            return parseInt(input.value);
        })
        valuesStorage.setValues(inputsValues);
        $scope.inputs = $scope.inputs.map(function(input) {
            if (input.id == id) {
                if(value < input.min || value > input.max) {    
                    input.errorMessage = `${input.label} от ${input.min} до ${input.max}`
                } else {
                    input.errorMessage = ' '
                }
            }    
            return input
        })       
    }  
}