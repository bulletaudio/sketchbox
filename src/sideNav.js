import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './CSS/sideNav.css';


class SideNav extends Component {
    render() {
      const drawings = this.props.app.state.drawings;
      const indexOfCurrentDrawing = this.props.app.state.indexOfCurrentDrawing;

        return (
            <Router>
            <div className="Side-Nav">
              <div style={{
                width: '100%',
                background: '#222222'
              }}>
                <button onClick={this.props.app.createNewDrawing} className="Create-New-Button" style={{
                  }}>Create new drawing</button>

                <ul style={{listStyleType: 'none', padding:'10px'}}>
                    {
                      drawings.map((drawing) => {
                        if (drawing.id === indexOfCurrentDrawing) {
                          return <li  className="Current-Drawing"><h3 className="Drawing-Name">{drawing.name}</h3></li>
                        }
                      return <li><h3 onClick={(e) => {
                        this.props.app.selectDrawing(drawing.id)
                      }} className="Drawing-Name">{drawing.name}</h3></li>
                    })}
                </ul>
              </div>
            </div>
       
          </Router>
        )
    }
}

export default SideNav;