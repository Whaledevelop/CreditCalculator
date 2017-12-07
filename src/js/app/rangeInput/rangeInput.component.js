'use strict'

angular.module('rangeInput')
    .component('rangeInput', {
        template: '<h1>{{input.container}}</h1>',
        controller: rangeInputController
    })

function rangeInputController($scope) {
    $scope.input = $scope.$parent.input
    $scope.container = 'hello'
    const stage = new Konva.Stage({
        container: $scope.input.container,
        width: 500,
        height: 200
    })
    const layer = new Konva.Layer();

    stage.add(layer)
    
    const circleSlider = new Konva.Circle({
        x: 250,
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

    const sliderCounterText = new Konva.Text({
        x: 250,
        y: 50,
        text: '1,5mln',
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: 'green'
    })

    const minText = new Konva.Text({
        x: 50,
        y: 25,
        text: '1,5mln',
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: 'green'
    })

    const maxText = new Konva.Text({
        x: 450,
        y: 25,
        text: '1,5mln',
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: 'green'
    })

    const orangeLine = new Konva.Line({
        points: [50, 50, 250, 50],
        stroke: '#ff7217',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round'
    })

    const greyLine = new Konva.Line({
        points: [450, 50, 250, 50],
        stroke: '#d2d0d2',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round'
    })   

    layer.add(greyLine)
    layer.add(orangeLine)
    layer.add(circleSlider)
    layer.add(sliderCounterText)
    layer.add(minText)
    layer.add(maxText)

    layer.draw()

    function handleRangeInput() {
        let xPosition = stage.getPointerPosition().x;
        if (xPosition < 50) {
            xPosition = 50           
        } else if (xPosition > 450) {
            xPosition = 450
        } else {
            circleSlider.move({
                x: xPosition - circleSlider.attrs.x 
            })
            sliderCounterText.move({
                x: xPosition - sliderCounterText.attrs.x 
            }) 
        }
        orangeLine.attrs.points = [50, 50, xPosition, 50]
        greyLine.attrs.points = [450, 50, xPosition, 50]       
        layer.draw()
    }

    circleSlider.on('dragmove', function(){
        handleRangeInput()
    })

    greyLine.on('mousedown', function(){
        handleRangeInput()
    })

    orangeLine.on('mousedown', function(){
        handleRangeInput()
    })    
}