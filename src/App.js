import './App.css'

import { css } from 'aphrodite/no-important'
import React, { Component } from 'react'
import AdditionalTubes from './components/AdditionalTubes'
import Board from './components/Board'
import Boiler from './components/Boiler'
import Gear from './components/Gear'
import LightningEngine from './components/LightningEngine'
import SteamEngine from './components/SteamEngine'
import SVGcanvas from './components/SVGcanvas'
import V3Engine from './components/V3Engine'
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
        <SVGcanvas width="550" height="800">
          <Board x={130} y={280} width={400} height={500} isDark={this.state.isDark} />
          <Gear x={70} y={200} size="l" speed="10s" reverse isDark={this.state.isDark} />
          <Gear x={155} y={200} size="s" speed="3.2s" isDark={this.state.isDark} />
          <Gear x={220} y={200} size="m" speed="6.4s" reverse isDark={this.state.isDark} />
          <Gear x={300} y={200} size="ma" speed="6s" isDark={this.state.isDark} />
          <AdditionalTubes
            isDark={this.state.isDark}
            positionX={10}
            positionY={10}
            width={270}
            height={80}
            text="Custom text"
            fontSize={32}
          />
          <V3Engine x={150} y={150} isDark={this.state.isDark} />
          <LightningEngine x={350} y={20} />
          <Boiler x={180} y={350} />
          <SteamEngine x={30} y={700} />
        </SVGcanvas>
        {intro}
      </div>
    )
  }
}

export default App
