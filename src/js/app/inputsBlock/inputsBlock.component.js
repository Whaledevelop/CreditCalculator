'use strict'

angular.module('inputsBlock')
    .component('inputsBlock', {
        templateUrl: '/templates/inputs-block.html',
        controller: inputsBlockController
    })

function inputsBlockController(inputsFromJson, valuesStorage, $scope) {
    inputsFromJson.get().$promise.then(
        successInGettingInputs, errorInGettingInputs
    )

    function successInGettingInputs(response) {
        const initialValues = response.map(function(input) {
            return input.value
        })
        valuesStorage.setValues(initialValues)
        $scope.inputs = response
    }

    function errorInGettingInputs(response) {
        console.log ('error in getting inputs ' + response)
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