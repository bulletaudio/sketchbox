import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './CSS/App.css';

import Canvas from './canvas';
import SideNav from './sideNav';


class App extends Component {


  state = {
    drawings: []
  }

  currentDrawing;

  //** Drawing schema 
  //{
  //   id:0,
  //   name: "Drawing 1",
  //   line: []
  // }

  componentDidMount() {
    this.createNewDrawing()
  }


  render() {
    return (
      <div className="rowC">
      <SideNav app={this}/>
      <Canvas app={this}/>
      </div>
    );
  }

  createNewDrawing = () => {
    const drawingsLength = this.state.drawings.length;
    const name = `Drawing ${drawingsLength + 1}`;

    const drawing = {
      id: drawingsLength,
      name: name,
      line: []
    }
    this.addDrawingToList(drawing)

    const drawings = this.state.drawings

    this.currentDrawing = drawing 
  }

  addDrawingToList = (drawing) => {
    var newDrawings = this.state.drawings;
    newDrawings.push(drawing);
    this.setState({
      drawings: newDrawings
    })
  }


  getCurrentDrawing = () => {
    return this.state.drawings.find((drawing) => {
        return (drawing.id === this.currentDrawing.id)[0];
    })
  }

  updateLineOfCurrentDrawing = (positionData) => {
    this.currentDrawing.line = this.currentDrawing.line.concat(positionData);
  }


}

export default App;
