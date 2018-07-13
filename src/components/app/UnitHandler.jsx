import React, {Component} from 'react';

class UnitHandler extends Component {
  generateUnitWithDeclension() {
    const {value, unit} = this.props;
    if (isNaN(value)) return "";
    const valueObj = (Math.round(value) + '').split('');
    const lastNumber = +valueObj[valueObj.length-1];
    switch (unit.slice(0, 3)) {
      case 'мес' : {
        if (lastNumber === 1) {
          return 'месяц'
        } else if (lastNumber >= 2 & lastNumber <= 4) {
          return 'месяца'
        } else return 'месяцев'
      }
      case 'руб' : {
        if (lastNumber === 1) {
          return 'рубль'
        } else if (lastNumber >= 2 & lastNumber <= 4) {
          return 'рубля'
        } else return 'рублей'
      }
      default: return unit
    }
  }

  render() { 
    return (  
      <span className = "textInputUnit">
        {this.generateUnitWithDeclension()}
      </span>
    );
  }
}
 
export default UnitHandler;