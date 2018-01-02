import React, { Component } from 'react';
import { Stage, Layer, Circle, Text, Line } from 'react-konva'

import moneyView from '../modules/moneyView'

export class RangeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layerLeftX: 50,
            layerRightX: this.props.width - 50,
            sliderY: this.props.height / 2
        }
    }

    componentDidMount() {
        const 
            { circleSlider, greyLine, orangeLine, stage } = this.refs,
            { layerLeftX, layerRightX } = this.state,
            { input, onChange } = this.props

        stage.getStage().on ('mouseover', () => {
            
            circleSlider.on('dragmove', () => { handleRangeValue()} )
        
            greyLine.on('mousedown', () => { handleRangeValue()})
        
            orangeLine.on('mousedown', () => { handleRangeValue()} )
        })
        
        const handleRangeValue = () => {
            let pointerX = stage.getStage().getPointerPosition().x;
            if (pointerX <= layerLeftX) {
                pointerX = layerLeftX
            } else if (pointerX >= layerRightX) {
                pointerX = layerRightX
            }
            const value = Math.round(
                (pointerX - layerLeftX) / (layerRightX - layerLeftX) * (input.max - input.min)
            ) + input.min
            onChange(value)
        }         
    }

    render() { 
        const 
            { width, height, input } = this.props,
            { layerLeftX, layerRightX, sliderY } = this.state,
            sliderX = (
                (layerRightX - layerLeftX) * (input.value - input.min) / (input.max - input.min)
            ) + layerLeftX,
            fontSize = 18,
            fontFamily = 'Calibri'

        return (
            <Stage
                ref = "stage"
                width = {width}
                height = {height}
            >
                <Layer>
                    <Line
                        ref = "orangeLine"
                        points = {[
                            layerLeftX,
                            sliderY,
                            sliderX,
                            sliderY,
                        ]}
                        stroke = '#ff7217'
                        strokeWidth = {4}
                        lineCap = 'round'
                        lineJoin = 'round'
                    ></Line>
                    <Line
                        ref = "greyLine"
                        points = {[
                            layerRightX,
                            sliderY,
                            sliderX,
                            sliderY,
                        ]}
                        stroke = '#d2d0d2'
                        strokeWidth = {4}
                        lineCap = 'round'
                        lineJoin = 'round'
                    ></Line>
                    <Circle
                        ref = "circleSlider"
                        x = { sliderX }
                        y = { sliderY }
                        radius = {8}
                        fill = '#fff'
                        stroke = '#ff7217'
                        strokeWidth = {2}
                        draggable = {true}
                        dragBoundFunc = {pos => {
                            if (pos.x <= layerLeftX) {
                                pos.x = layerLeftX
                            } else if (pos.x >= layerRightX) {
                                pos.x = layerRightX
                            }
                            return {
                                x: pos.x,
                                y: sliderY
                            }
                        }}
                    ></Circle>
                    <Text
                        ref = "sliderCounter"
                        x = {sliderX - moneyView(input.value).length * 4}
                        y = {sliderY + 15}
                        text = {moneyView(input.value)}
                        fontSize = {fontSize}
                        fontFamily = {fontFamily}
                        fill = "#17B558"
                    ></Text>
                    <Text
                        ref = "minText"
                        x = {layerLeftX - moneyView(input.min).length * 4}
                        y = {sliderY - 30}
                        text = {moneyView(input.min)}
                        fontSize = {fontSize}
                        fontFamily = {fontFamily}
                        fill = "#757375"
                    ></Text>
                    <Text
                        ref = "maxText"
                        x = {layerRightX - moneyView(input.max).length * 4}
                        y = {sliderY - 30}
                        text = {moneyView(input.max)}
                        fontSize = {fontSize}
                        fontFamily = {fontFamily}
                        fill = "#757375"
                    ></Text>
                </Layer>
            </Stage>
          )
    }
}
 
export default RangeInput;