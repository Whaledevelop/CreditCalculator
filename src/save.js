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

/*
    const layer = new Konva.Layer();
    
    stage.add(layer)

    const circleSlider = new Konva.Circle({
        x: 250 * self.input.id,
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

    layer.draw();*/
/*
    self.handleChange = function() {
        self.onChange({
            value: self.input.value
        })
    }
*/
}