import React, { Component } from 'react';
import Konva from 'konva'

import moneyView from '../modules/moneyView'

class RangeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: {}
        }
    }

    componentDidMount() {
        console.log ('ComponentDidMount')
        const { input, onChange } = this.props;

        const 
            containerElem = document.getElementById(`${input.container}`),
            containerWidth = getComputedStyle(containerElem).width,
            containerHeight = getComputedStyle(containerElem).height,

            stage = new Konva.Stage({
                container: input.container,
                width: containerWidth.replace(/px/, ''),
                height: containerHeight.replace(/px/, '')
            }),

            stageWidth = stage.attrs.width,
            stageHeight = stage.attrs.height,
            layerLeftX = 10,
            layerRightX = stageWidth - 10,
            sliderX = (
                Math.round((input.value / (
                    (input.max - input.min)/(layerRightX - layerLeftX))) + layerLeftX)
            ),
            sliderY = 35,

            layer = new Konva.Layer({
                layerLeftX: layerLeftX,
                layerRightX: layerRightX,
                sliderY: sliderY
            }),

            circleSlider = new Konva.Circle({
                name: "circleSlider",
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
            }),

            sliderCounter = new Konva.Text({
                name: "sliderCounter",
                x: sliderX - 20,
                y: sliderY + 10,
                text: moneyView(input.value),
                fontSize: 18,
                fontFamily: 'Calibri',
                fill: 'green'
            }),

            minText = new Konva.Text({
                x: layerLeftX,
                y: sliderY - 30,
                text: moneyView(input.min),
                fontSize: 18,
                fontFamily: 'Calibri',
                fill: 'green'
            }),

            maxText = new Konva.Text({
                x: layerRightX - 70,
                y: sliderY - 30,
                text: moneyView(input.max),
                fontSize: 18,
                fontFamily: 'Calibri',
                fill: 'green'
            }),

            orangeLine = new Konva.Line({
                name: "orangeLine",
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
            }),

            greyLine = new Konva.Line({
                name: "greyLine",
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
           
        stage.add(layer)  

        layer.add(sliderCounter)
        layer.add(minText)
        layer.add(maxText)
        layer.add(orangeLine)
        layer.add(greyLine)
        layer.add(circleSlider)
        layer.draw()

        this.setState({
            stage: stage  
        });

        function handleRangeValue() {
            const value = Math.round((
                    (stage.getPointerPosition().x - layerLeftX) / (layerRightX - layerLeftX)
                ) * (input.max - input.min))
                onChange(value)
        }

        circleSlider.on('dragmove', function(){
            handleRangeValue()
        })
    
        greyLine.on('mousedown', function(){
            handleRangeValue()
        })
    
        orangeLine.on('mousedown', function(){
            handleRangeValue()
        })  
    }

    componentWillReceiveProps(nextProps) {
        console.log (nextProps)
        console.log (this.state.stage.getPointerPosition())
        if (this.state.stage.getPointerPosition() !== undefined) {
            const 
                { value } = nextProps.input,
                { stage } = this.state,
                layer = stage.children.filter(child => {
                    return child.nodeType === 'Layer'
                })[0],
                circleSlider = layer.children.filter(child => {
                    return child.attrs.name === "circleSlider"
                })[0],
                sliderCounter = layer.children.filter(child => {
                    return child.attrs.name === "sliderCounter"
                })[0],
                greyLine = layer.children.filter(child => {
                    return child.attrs.name === "greyLine"
                })[0],
                orangeLine = layer.children.filter(child => {
                    return child.attrs.name === "orangeLine"
                })[0],
                newSliderX = stage.getPointerPosition().x
            
            if (newSliderX >= layer.attrs.layerLeftX 
                & newSliderX <= layer.attrs.layerRightX) {
                circleSlider.move({
                    x: newSliderX - circleSlider.attrs.x 
                })
                sliderCounter.move({
                    x: newSliderX - sliderCounter.attrs.x 
                })
                sliderCounter.setAttrs({
                    text: moneyView(value)
                })
                orangeLine.setAttrs ({
                    points: [
                        layer.attrs.layerLeftX, 
                        layer.attrs.sliderY, 
                        newSliderX, 
                        layer.attrs.sliderY
                    ]
                })
                greyLine.setAttrs ({
                    points: [
                        layer.attrs.layerRightX, 
                        layer.attrs.sliderY, 
                        newSliderX, 
                        layer.attrs.sliderY
                    ]
                }) 
                layer.draw()
            }
        }
    }

    render() { 
        return (
            <div 
                id = { this.props.input.container }
                style = {{ height: "100%"}}
            ></div>
        )
    }
}
 
export default RangeInput;