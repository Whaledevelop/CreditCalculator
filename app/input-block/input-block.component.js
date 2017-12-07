'use strict'

angular
    .module('inputBlock')
    .component('inputBlock', {
        templateUrl: 'input-block/input-block.template.html',
        bindings: {
            input: '<',
            onChange: '&'
        },
        controller: ['moneyView', 'unitHandler', InputBlockController]
    })

function InputBlockController(moneyView, unitHandler) {
    let self = this

    self.moneyView = function(value) {
        return moneyView.setView(value)
    }

    self.unitHandler = function(value, unit) {
        let inputUnit = unitHandler.setUnit(value, unit)
        if (inputUnit === 'руб.') {
            inputUnit = 'рублей'
        }
        return inputUnit
    }

    self.handleChange = function(value) {
        if (value < self.input.min) {
            value = self.input.min     
        } else if (value > self.input.max) {
            value = self.input.max
        }
        self.onChange({
            value: value
        })
    }
}