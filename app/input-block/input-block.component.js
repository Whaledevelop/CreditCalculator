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

    self.handleChange = function() {
        let value = self.input.value
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

function RangeInputController() {
    let self = this
    self.stage = new Konva.Stage ({
        container: 'container',
        width: 500,
        height: 350
    })

    const inputs = self.inputs.map(function (input) {
        return input.value
    })

    console.log (inputs)

    angular.forEach(this.inputs, function() {
        console.log ('hello')
    });

    function makeNewLayer(input) {
        const layer = new Konva.Layer ()
        self.stage.add(layer)
        console.log (self.stage)
        console.log (input)
    
        const circleSlider = new Konva.Circle({
            x: 50 * self.input.id,
            y: 50,
            radius: 8,
            fill: '#fff',
            stroke: '#ff7217',
            strokeWidth: 2,
            draggable: true,
            dragBoundFunc: function(pos) {
                if (pos.x < 50 ) {
                    pos.x = 50
                } else if (pos.x > 450) {
                    pos.x = 450
                }
                return {
                    x: pos.x,
                    y: 50
                }
            }
        });
    
        layer.add (circleSlider)
        layer.draw()
    }
}