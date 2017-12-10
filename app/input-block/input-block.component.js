'use strict'

angular
    .module('inputBlock')
    .component('inputBlock', {
        templateUrl: 'input-block/input-block.template.html',
        bindings: {
            input: '<',
            stage: '<',
            onChange: '&'
        },
        controller: ['moneyView', 'unitHandler', InputBlockController]
    })

function InputBlockController(moneyView, unitHandler) {
    let self = this

    const layer = new Konva.Layer();
    self.stage.add(layer)

    const 
        stageWidth = self.stage.attrs.width,
        stageHeight = self.stage.attrs.height,
        layerLeftX = 50,
        layerRightX = stageWidth - 50,
        sliderX = (
            Math.round((self.input.value / ((self.input.max - self.input.min)/(layerRightX - layerLeftX))) + layerLeftX)
        ),
        sliderY = 50 * self.input.id 

    const circleSlider = new Konva.Circle({
        x: sliderX,
        y: sliderY,
        radius: 8,
        fill: '#fff',
        stroke: '#ff7217',
        strokeWidth: 2,
        draggable: true,
        dragBoundFunc: function(pos) {
            if (pos.x <= layerLeftX) {
                pos.x = layerLeftX
            } else if (pos.x >= layerRightX) {
                pos.x = layerRightX
            }
            return {
                x: pos.x,
                y: this.getAbsolutePosition().y
            }
        }
    })

    const sliderCounter = new Konva.Text({
        x: sliderX,
        y: sliderY + 20,
        text: self.input.value,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: 'green'
    })

    const minText = new Konva.Text({
        x: layerLeftX,
        y: sliderY - 20,
        text: self.input.min,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: 'green'
    })

    const maxText = new Konva.Text({
        x: layerRightX,
        y: sliderY - 20,
        text: self.input.max,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: 'green'
    })

    const orangeLine = new Konva.Line({
        points: [
            layerLeftX, 
            sliderY, 
            sliderX, 
            sliderY
        ],
        stroke: '#ff7217',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round'
    })

    const greyLine = new Konva.Line({
        points: [
            layerRightX, 
            sliderY, 
            sliderX, 
            sliderY
        ],
        stroke: '#d2d0d2',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round'
    })  

    layer.add(greyLine)
    layer.add(orangeLine)
    layer.add(circleSlider)
    layer.add(sliderCounter)
    layer.add(minText)
    layer.add(maxText)

    layer.draw()

    function handleRangeValues() {
        let newSliderX = self.stage.getPointerPosition().x;
        if (newSliderX <= layerLeftX) {
            newSliderX = layerLeftX           
        } else if (newSliderX >= layerRightX) {
            newSliderX = layerRightX
        } else {
            circleSlider.move({
                x: newSliderX - circleSlider.attrs.x 
            })
            sliderCounter.move({
                x: newSliderX - sliderCounter.attrs.x 
            }) 
        }
        let value = Math.round(
            ((newSliderX - layerLeftX) / (layerRightX - layerLeftX)) * (self.input.max - self.input.min)
        )

        $(`#${self.input.inputId}`).focus().val(value)
        
        
        sliderCounter.setAttrs({
            text: value
        })
        orangeLine.setAttrs ({
            points: [
                layerLeftX, 
                sliderY, 
                newSliderX, 
                sliderY
            ]
        })
        greyLine.setAttrs ({
            points: [
                layerRightX, 
                sliderY, 
                newSliderX, 
                sliderY
            ]
        })      
        layer.draw()
    }


    circleSlider.on('dragmove', function(){
        handleRangeValues()
    })

    greyLine.on('mousedown', function(){
        handleRangeValues()
    })

    orangeLine.on('mousedown', function(){
        handleRangeValues()
    }) 
  
/* Old input block */

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
        console.log ('change')
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