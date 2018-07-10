import React, { Component } from 'react';
import { Stage, Layer } from 'konva';
import { Group } from 'react-konva';

class RangeInputBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    const {width, height, creditProp} = this.props;
    return (  
      <Stage
        ref = "stage"
        width = {width}
        height = {height}
      >
        <Layer>
          <Group></Group>
        </Layer>
      </Stage>
    );
  }
}
 
export default RangeInputBlock;