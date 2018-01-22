import './App.css'

import React, { Component } from 'react'
import Boiler from './components/Boiler'
import LightningEngine from './components/LightningEngine'
import SVGcanvas from './components/SVGcanvas'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SVGcanvas width="600" height="800">
          <LightningEngine x={350} y={20} />
          <Boiler x={180} y={350} />
        </SVGcanvas>
      </div>
    )
  }
}

export default App
