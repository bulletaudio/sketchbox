import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './CSS/sideNav.css';


class SideNav extends Component {

    state = {
      inputValue: ""
    }

    render() {
      const drawings = this.props.app.state.drawings;
      const indexOfCurrentDrawing = this.props.app.state.indexOfCurrentDrawing;

        return (
            <Router>
              <div className="Side-Nav">
                <input className="Input" type="text" placeholder="Add name here" value={this.state.inputValue} onChange={this.handleChange}/>
                <button onClick={(e) => {this.didTapNewDrawingButton() }} className="Create-New-Button"> Create new drawing </button>

                <ul className="Drawings-List">
                    {
                      drawings.map((drawing) => {
                        if (drawing.id === indexOfCurrentDrawing) {
                          return <li  className="Current-Drawing"><h3 className="Drawing-Text">{drawing.name}</h3></li>
                        }
                      return <li><h3 onClick={(e) => {
                        this.props.app.selectDrawing(drawing.id)
                      }} className="Drawing-Text">{drawing.name}</h3></li>
                    })}
                </ul>
              </div>
          </Router>
        )
    }

    handleChange = (evt) => {
      this.setState({
        inputValue: evt.target.value
      })
    }

    didTapNewDrawingButton = () => {
      this.props.app.createNewDrawing(this.state.inputValue)
      
      this.setState({
        inputValue: ""
      })
    }
}

export default SideNav;