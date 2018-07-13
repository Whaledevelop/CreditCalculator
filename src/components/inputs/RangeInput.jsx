import React, { Component } from 'react';

import { Stage, Layer, Circle, Text, Line } from 'react-konva'

class RangeInput extends Component {
  constructor(props) {
    super(props);
    this.LAYER_LEFT_X = 50;
    this.LAYER_RIGHT_X = this.props.width - 50;
    this.SLIDER_Y = this.props.height / 2;
    this.FONT_SIZE = 18;
    this.FONT_FAMILY = 'Calibri';

    this.handleRangeValue = this.handleRangeValue.bind(this)
  }

  calcalulateValueFromPointerX(pointerX) {
    const {max, min, step} = this.props.creditProp
    const valueWithSmallNumbers = Math.round(
      (pointerX - this.LAYER_LEFT_X) * (max - min) / 
      (this.LAYER_RIGHT_X - this.LAYER_LEFT_X)  + min
    );
    const correctValue = Math.round(valueWithSmallNumbers / step) * step
    return correctValue
  }

  handleRangeValue() {
    let pointerX = this.refs.stage.getStage().getPointerPosition().x;
    if (pointerX <= this.LAYER_LEFT_X) {
      pointerX = this.LAYER_LEFT_X
    } else if (pointerX >= this.LAYER_RIGHT_X) {
      pointerX = this.LAYER_RIGHT_X
    };
    const value = this.calcalulateValueFromPointerX(pointerX)
    this.props.onChange(this.props.creditProp.id, value);
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
    const { value, min, max } = this.props.creditProp;        
    const sliderX = (
      (this.LAYER_RIGHT_X - this.LAYER_LEFT_X) * 
      (value - min) / (max - min)) + this.LAYER_LEFT_X;        
    return (
      <Stage
        ref = "stage"
        width = {this.props.width}
        height = {this.props.height}
      >
        <Layer>
          <Line
            ref = "orangeLine"
            points = {[
              this.LAYER_LEFT_X,
              this.SLIDER_Y,
              sliderX,
              this.SLIDER_Y,
            ]}
            stroke = '#ff7217'
            strokeWidth = {4}
            lineCap = 'round'
            lineJoin = 'round'
          ></Line>
          <Line
            ref = "greyLine"
            points = {[
              this.LAYER_RIGHT_X,
              this.SLIDER_Y,
              sliderX,
              this.SLIDER_Y,
            ]}
            stroke = '#d2d0d2'
            strokeWidth = {4}
            lineCap = 'round'
            lineJoin = 'round'
          ></Line>
          <Circle
            ref = "circleSlider"
            x = { sliderX }
            y = { this.SLIDER_Y }
            radius = {8}
            fill = '#fff'
            stroke = '#ff7217'
            strokeWidth = {2}
            draggable = {true}
            dragBoundFunc = {pos => {
              if (pos.x <= this.LAYER_LEFT_X) {
                pos.x = this.LAYER_LEFT_X
              } else if (pos.x >= this.LAYER_RIGHT_X) {
                pos.x = this.LAYER_RIGHT_X
              }
              return {
                x: pos.x,
                y: this.SLIDER_Y
              }
            }}
          ></Circle>
          <Text
            ref = "sliderCounter"
            x = {sliderX - value.toLocaleString().length * 4}
            y = {this.SLIDER_Y + 15}
            text = {value.toLocaleString()}
            fontSize = {this.FONT_SIZE}
            fontFamily = {this.FONT_FAMILY}
            fill = "#17B558"
          ></Text>
          <Text
            ref = "minText"
            x = {this.LAYER_LEFT_X - min.toLocaleString().length * 4}
            y = {this.SLIDER_Y - 30}
            text = {min.toLocaleString()}
            fontSize = {this.FONT_SIZE}
            fontFamily = {this.FONT_FAMILY}
            fill = "#757375"
          ></Text>
          <Text
            ref = "maxText"
            x = {this.LAYER_RIGHT_X - max.toLocaleString().length * 4}
            y = {this.SLIDER_Y - 30}
            text = {max.toLocaleString()}
            fontSize = {this.FONT_SIZE}
            fontFamily = {this.FONT_FAMILY}
            fill = "#757375"
          ></Text>
        </Layer>
      </Stage>
    )
  }
}
 
export default RangeInput;