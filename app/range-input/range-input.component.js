'use strict'

angular
    .module('rangeInput')
    .component('rangeInput', {
        templateUrl: 'range-input/range-input.template.html',
        bindings: {
            input: '<',
            onChange: '&'
        },
        controller: RangeInputController
    })

function RangeInputController() {
    let self = this;

    self.handleChange = function() {
        self.onChange({
            value: self.input.value
        })
    }
}