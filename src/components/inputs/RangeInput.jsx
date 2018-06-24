import React, { Component } from 'react';
import { Stage, Layer, Circle, Text, Line } from 'react-konva'

export class RangeInput extends Component {
    constructor(props) {
        super(props);

        this.layerLeftX = 50;
        this.layerRightX = this.props.width - 50;
        this.sliderY = this.props.height / 2;

        this.handleRangeValue = this.handleRangeValue.bind(this)
    }

    handleRangeValue() {
        const {stage} = this.refs,
            { layerLeftX, layerRightX } = this,
            { input, onChange } = this.props;

        let pointerX = stage.getStage().getPointerPosition().x;
        if (pointerX <= layerLeftX) {
            pointerX = layerLeftX
        } else if (pointerX >= layerRightX) {
            pointerX = layerRightX
        }
        const value = Math.round(
            (pointerX - layerLeftX) / (layerRightX - layerLeftX) 
            * (input.max - input.min)
        ) + input.min
        onChange(input.id, value)
    }

    componentDidMount() {
        const { circleSlider, greyLine, orangeLine, stage } = this.refs;

        stage.getStage().on ('mouseover', () => {
            
            circleSlider.on('dragmove', this.handleRangeValue)
        
            greyLine.on('mousedown', this.handleRangeValue)
        
            orangeLine.on('mousedown', this.handleRangeValue)
        })      
    }

    render() { 
        const 
            { width, height, input } = this.props,
            { layerLeftX, layerRightX, sliderY } = this,
            fontSize = 18,
            fontFamily = 'Calibri';
        
        let {value, max, min} = input;
        if (value <= min) value = min
        else if (value >= max) value = max;

        const sliderX = (layerRightX - layerLeftX) * (value - min) 
            / (max - min) + layerLeftX;
            

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
                        x = {sliderX - value.toLocaleString().length * 4}
                        y = {sliderY + 15}
                        text = {value.toLocaleString()}
                        fontSize = {fontSize}
                        fontFamily = {fontFamily}
                        fill = "#17B558"
                    ></Text>
                    <Text
                        ref = "minText"
                        x = {layerLeftX - min.toLocaleString().length * 4}
                        y = {sliderY - 30}
                        text = {min.toLocaleString()}
                        fontSize = {fontSize}
                        fontFamily = {fontFamily}
                        fill = "#757375"
                    ></Text>
                    <Text
                        ref = "maxText"
                        x = {layerRightX - max.toLocaleString().length * 4}
                        y = {sliderY - 30}
                        text = {max.toLocaleString()}
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