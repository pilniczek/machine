import './App.css'

import { css } from 'aphrodite/no-important'
import React, { Component } from 'react'
import Boiler from './components/Boiler'
import LightningEngine from './components/LightningEngine'
import SVGcanvas from './components/SVGcanvas'
import styles from './styles'


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isDark: true
    }

    this.setDark = this.setDark.bind(this)
    this.handleDarkChange = this.handleDarkChange.bind(this)
  }

  setDark (isDark) {
    this.setState({
      isDark: isDark
    })
  }

  handleDarkChange () {
    this.setDark(!this.state.isDark)
  }

  render() {
    let intro
    if(this.state.isDark){
      intro = (<button className={css(styles.welcome)} onClick={() => this.handleDarkChange()}>
        <div className={css(styles.text)}>This areas are interactive</div>
        <div className={css(styles.ok)}>OK!</div>
      </button>)
    }

    return (
      <div className="App">
        <SVGcanvas width="600" height="800">
          <LightningEngine x={350} y={20} />
          <Boiler x={180} y={350} isDark={this.state.isDark} />
        </SVGcanvas>
        {intro}
      </div>
    )
  }
}

export default App
