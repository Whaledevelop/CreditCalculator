'use strict'

angular
    .module('inputBlock')
    .component('inputBlock', {
        templateUrl: 'input-block/input-block.template.html',
        bindings: {
            input: '<',
            onChange: '&'
        },
        controller: InputBlockController
    })

function InputBlockController() {
    this.handleChange = function() {
        this.onChange({
            value: this.input.value
        })
    }
}