import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Canvas from './canvas';
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <h2>home</h2>,
  },
  {
    path: '/',
    exact: true,
    sidebar: () => <div>bubblegum</div>,
    main: () => <h2>bubblegum</h2>,
  },
  {
    path: '/',
    exact: true,
    sidebar: () => <div>shoelaces</div>,
    main: () => <h2>shoelaces</h2>,
  },
]

class App extends Component {
  render() {
    return (
      <div className="rowC">
      <Router className="App">
        <div style={{display:'flex', height: '100vh', width: '24%'}}>
          <div className= "Create-bar" style={{
            width: '100%',
            background: '#222222'
          }}>
            <div style={{
              height: '50px',
              width: '100%',
              background: '#FFB2B2'
            }}>
              <a>Create new drawing</a>
            </div>
            <ul style={{listStyleType: 'none', padding:'10px'}}>
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/bubblegum">BubbleGum</Link></li>
              <li> <Link to="/shoeslaces">Shoeslaces</Link></li>
            </ul>
 
          </div>
        </div>
   

      </Router>
      <Canvas/>
      </div>
    );
  }
}

export default App;