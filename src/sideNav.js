import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './CSS/sideNav.css';


class SideNav extends Component {
    render() {
      const drawings = this.props.app.state.drawings;

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
                      return <li><h3 className="Drawing-Name">{drawing.name}</h3></li>
                    })}
                </ul>
              </div>
            </div>
       
          </Router>
        )
    }
}

export default SideNav;