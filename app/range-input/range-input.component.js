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
    const layer = new Konva.Layer();
    self.stage.add(layer)

    const 
        stageWidth = self.stage.attrs.width,
        stageHeight = self.stage.attrs.height,
        layerLeftX = 50,
        layerRightX = stageWidth - 50,
        {value, max, min} = self.input,
        sliderX = (
            Math.round((value / ((max - min)/(layerRightX - layerLeftX))) + layerLeftX)
        ),
        sliderY = 50 + 100 * self.input.id 
    
    const circleSlider = new Konva.Circle({
        x: sliderX,
        y: sliderY,
        radius: 8,
        fill: '#fff',
        stroke: '#ff7217',
        strokeWidth: 2,
        draggable: true,
        dragBoundFunc: function(pos) {
            if (pos.x < layerLeftX) {
                pos.x = layerLeftX
            } else if (pos.x > layerRightX) {
                pos.x = layerRightX
            }
            return {
                x: pos.x,
                y: this.getAbsolutePosition().y
            }
        }
    });

    const sliderCounter = new Konva.Text({
        x: sliderX,
        y: sliderY + 20,
        text: value,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: 'green'
    })

    const minText = new Konva.Text({
        x: layerLeftX,
        y: sliderY - 20,
        text: min,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: 'green'
    })

    const maxText = new Konva.Text({
        x: layerRightX,
        y: sliderY - 20,
        text: max,
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
    
    function drawRangeInput() {
        let newSliderX = self.stage.getPointerPosition().x;
        if (newSliderX < layerLeftX) {
            newSliderX = layerLeftX           
        } else if (newSliderX > layerRightX) {
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
        sliderCounter.attrs.text = 'hello'
        orangeLine.attrs.points = [
            layerLeftX, 
            sliderY, 
            newSliderX, 
            sliderY
        ]
        greyLine.attrs.points = [
            layerRightX, 
            sliderY, 
            newSliderX, 
            sliderY
        ]       
        layer.draw()
    }

    function handleRangeValues() {
        const newSliderX = self.stage.getPointerPosition().x
        let value = Math.round(
            ((newSliderX - layerLeftX) / (layerRightX - layerLeftX)) * (self.input.max - self.input.min)
        )
        sliderCounter.attrs.text = value
        layer.draw()
        self.onChange({
            input: self.input,
            value: value
        })
    }

    circleSlider.on('dragmove', function(){
        handleRangeValues()
        drawRangeInput()
    })

    greyLine.on('mousedown', function(){
        handleRangeValues()
        drawRangeInput()
    })

    orangeLine.on('mousedown', function(){
        handleRangeValues()
        drawRangeInput()
    })    
}