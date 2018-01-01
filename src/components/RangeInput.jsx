import React, { Component } from 'react';
import Konva from 'konva'

import moneyView from '../modules/moneyView'

class RangeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layer: {}
        }
    }

    componentDidMount() {
        const { input, onChange } = this.props;

        const numberPadding = (value) => {
            return moneyView(value).length * 4
        }

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
            layerLeftX = 50,
            layerRightX = stageWidth - 50,
            sliderX = (
                (layerRightX - layerLeftX) * (input.value - input.min) / (input.max - input.min)
            ) + layerLeftX,
            sliderY = 35,

            layer = new Konva.Layer({
                layerLeftX: layerLeftX,
                layerRightX: layerRightX,
                sliderY: sliderY,
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
            fontSize = 18,
            fontFamily = 'Calibri',
            sliderCounter = new Konva.Text({
                name: "sliderCounter",
                x: sliderX - numberPadding(input.value),
                y: sliderY + 15,
                text: moneyView(input.value),
                fontSize: fontSize,
                fontFamily: fontFamily,
                fill: "#17B558"
            }),

            minText = new Konva.Text({
                x: layerLeftX - numberPadding(input.min),
                y: sliderY - 30,
                text: moneyView(input.min),
                fontSize: fontSize,
                fontFamily: fontFamily,
                fill: "#757375"
            }),

            maxText = new Konva.Text({
                x: layerRightX - numberPadding(input.max),
                y: sliderY - 30,
                text: moneyView(input.max),
                fontSize: fontSize,
                fontFamily: fontFamily,
                fill: "#757375"
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
                strokeWidth: 4,
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
                strokeWidth: 4,
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
            layer: layer 
        });

        function handleRangeValue() {
            let xPosition = stage.getPointerPosition().x;
            if (xPosition <= layerLeftX) {
                xPosition = layerLeftX
            } else if (xPosition >= layerRightX) {
                xPosition = layerRightX
            }
            const value = Math.round(
                (xPosition - layerLeftX) / (layerRightX - layerLeftX) * (input.max - input.min)
            ) + input.min
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
        const 
            { value, max, min } = nextProps.input,
            { layer } = this.state,
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
            { layerLeftX, layerRightX, sliderY } = layer.attrs,
            
            newSliderX = (
                (layerRightX - layerLeftX) * (value - min) / (max - min)
            ) + layerLeftX;
            
        if (newSliderX >= layerLeftX && newSliderX <= layerRightX) {
            
            circleSlider.move({
                x: newSliderX - circleSlider.attrs.x 
            })
            sliderCounter.move({
                x: newSliderX - sliderCounter.attrs.x - moneyView(value).length * 4
            })
            sliderCounter.setAttrs({
                text: moneyView(value)
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