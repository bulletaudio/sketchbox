import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './CSS/App.css';

import Canvas from './canvas';
import SideNav from './sideNav';


class App extends Component {

  state = {
    indexOfCurrentDrawing: 0,
    drawings: []
  }

  constructor(props) {
    super(props);
  }

  //Declared outside of state 
  //so as to avoid triggering render everytime it changes 
  lineOfCurrentDrawing = []

  componentDidMount() {

    //Add new drawing 
    this.createNewDrawing("First drawing")

  }

  render() {
    return (
      <div className="rowC">
      <SideNav app={this}/>
      <Canvas app={this}/>
      </div>
    );
  }

  createNewDrawing = (nameInput) => {
    const drawingsLength = this.state.drawings.length;
    var name = nameInput
    if (nameInput === null) {
      name = `Drawing ${drawingsLength + 1}`;
    }
    console.log(name);

    const drawing = {
      id: drawingsLength,
      name: name,
      line: []
    }
    this.addDrawingToList(drawing)

    const drawings = this.state.drawings
    // this.setState({
    //   indexOfCurrentDrawing: drawingsLength 
    // })
  }

  addDrawingToList(drawing) {
    var newDrawings = this.state.drawings;
    newDrawings.push(drawing);
    this.setState({
      drawings: newDrawings
    })
  }


  getCurrentDrawing() {
    const index = this.state.indexOfCurrentDrawing;
    const drawings = this.state.drawings;
    return drawings[index];
  }

  updateLineOfCurrentDrawing(positionData) {
    this.lineOfCurrentDrawing = this.lineOfCurrentDrawing.concat(positionData);
  }


  updateCurrentDrawingInDrawingsList() {
    const drawings = this.state.drawings 
    const index = this.state.indexOfCurrentDrawing;
    drawings[index].line = this.lineOfCurrentDrawing;

    this.setState({
      drawings: drawings
    })
    
  }

  selectDrawing(id) {
    const line = this.state.drawings[id].line
    this.lineOfCurrentDrawing = line 
    this.setState({
      indexOfCurrentDrawing: id
    })
  }


}

export default App;
