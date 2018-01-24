import './App.css'

import { css } from 'aphrodite/no-important'
import React, { Component } from 'react'
import AdditionalTubes from './components/AdditionalTubes'
import Board from './components/Board'
import Boiler from './components/Boiler'
import LightningEngine from './components/LightningEngine'
import SteamEngine from './components/SteamEngine'
import SVGcanvas from './components/SVGcanvas'
import Gear from './components/Gear'
import styles from './styles'


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isDark: false//true
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
        <div className={css(styles.text)}>These areas are interactive</div>
        <div className={css(styles.ok)}>OK!</div>
      </button>)
    }

    return (
      <div className={css(styles.app, this.state.isDark ? styles.isDark : styles.appBg)}>
        <SVGcanvas width="600" height="800">
          <Gear x={50} y={50} isDark={this.state.isDark} />
          <Gear x={123} y={123} isSmall isDark={this.state.isDark} />
          <AdditionalTubes isDark={this.state.isDark} />
          <LightningEngine x={350} y={20} />
          <Boiler x={180} y={350} />
          <SteamEngine x={30} y={700} />
          <Board x={220} y={280} isDark={this.state.isDark} />
        </SVGcanvas>
        {intro}
      </div>
    )
  }
}

export default App
