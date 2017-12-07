'use strict'

angular
    .module('rangeInput')
    .component('rangeInput', {
        bindings: {
            input: '<',
            stage: '<',
            onChange: '&'
        },
        controller: RangeInputController
    })

function RangeInputController() {
    let self = this
    console.log (self.input)
    console.log (self.stage)
}