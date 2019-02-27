import React, { Component } from 'react';
import VColorPicker, { TypePickerColor, VColorResult } from '../components/ColorPicker/VColorPicker';


interface IState {
  typePickerColor: TypePickerColor
}


class ColorPickerDemo extends Component<any, IState> {

  constructor(props: any) {
    super(props);

    this.state = {
      typePickerColor: 'SketchPicker'
    };
  }


  render() {
    return (
      <div  >
        <br/>
        <br/>
         <button onClick={this.handleChangeTypeToSketchPicker} >SketchPicker</button>
         <button onClick={this.handleChangeTypeToChromePicker}>ChromePicker</button>
        <br />
        <br />
        <VColorPicker  defaultColor={'blue'} onChange={this.handleChangeColor} typePickerColor={this.state.typePickerColor}/>
      </div>
    );
  }


  handleChangeColor = (color: VColorResult) => {
    //console.log('ha cambiado el color', color);
  };

  handleChangeTypeToChromePicker = () => {
    this.setState({
      typePickerColor:'ChromePicker'
    })
  };

  handleChangeTypeToSketchPicker = () => {
    this.setState({
      typePickerColor:'SketchPicker'
    })
  };
}

export default ColorPickerDemo;