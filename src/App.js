import './App.css'

import { css } from 'aphrodite/no-important'
import React, { Component } from 'react'
import AdditionalTubes from './components/AdditionalTubes'
import Board from './components/Board'
import MainBoard from './components/MainBoard'
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
      isDark: false,//true,
      page: true,
      animationPause: 'paused',
    }

    this.setDark = this.setDark.bind(this)
    this.handleDarkChange = this.handleDarkChange.bind(this)

    this.setPage = this.setPage.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)

    this.setAnimationPause = this.setAnimationPause.bind(this)
    //this.handleAnimationPauseChange = this.handleAnimationPauseChange.bind(this)
  }

  setDark (isDark) {
    this.setState({
      isDark: isDark
    })
  }

  setPage (page) {
    this.setState({
      page: page
    })
  }

  setAnimationPause (animationPause) {
    this.setState({
      animationPause: animationPause,
    })
  }

  handleDarkChange () {
    this.setDark(!this.state.isDark)
  }

  handlePageChange () {
    this.setPage(!this.state.page)
    if(this.state.animationPause === 'paused'){
      this.setAnimationPause('running')
      setTimeout(() => {
        this.setAnimationPause('paused')
      }, 3000);
    }
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
          <Gear x={50} y={230} size="m" speed="6.4s" reverse
            isDark={this.state.isDark}
            animationPause={this.state.animationPause}
          />
          <Gear x={225} y={210} size="l" speed="10s" reverse
            isDark={this.state.isDark}
            animationPause={this.state.animationPause}
          />
          <Gear x={260} y={115} size="ma" speed="6s"
            isDark={this.state.isDark}
            animationPause={this.state.animationPause}
          />
          <Gear x={360} y={130} size="l" speed="10s" reverse
            isDark={this.state.isDark}
            animationPause={this.state.animationPause}
          />
          <Gear x={50} y={295} size="s" speed="3.2s"
            isDark={this.state.isDark}
            animationPause={this.state.animationPause}
          />
          <Gear x={90} y={370} size="l" speed="10s" reverse
            isDark={this.state.isDark}
            animationPause={this.state.animationPause}
          />
          <Gear x={120} y={620} size="l" speed="10s"
            isDark={this.state.isDark}
            animationPause={this.state.animationPause}
          />
          <Board x={125} y={250} width={405} height={500}
            isDark={this.state.isDark}>
            <text x={185} y={310} dominantBaseline="central" fontSize={24}>
            {this.state.page ? 'infoinfoi nfoinfo' : '2infoinfoi 2nfoinfo'}
            </text>
            <text x={185} y={340} dominantBaseline="central" fontSize={24}>
              infoinfoi nfoinfo
            </text>
            <text x={185} y={370} dominantBaseline="central" fontSize={24}>
              infoinfoi nfoinfo
            </text>
            <text x={215} y={440} dominantBaseline="central" fontSize={24}>
              infoinfoi nfoinfo
            </text>
            <text x={215} y={470} dominantBaseline="central" fontSize={24}>
              infoinfoi nfoinfo
            </text>
            <text x={215} y={500} dominantBaseline="central" fontSize={24}>
              infoinfoi nfoinfo
            </text>
            <text x={215} y={530} dominantBaseline="central" fontSize={24}>
              infoinfoi nfoinfo
            </text>
            <text x={215} y={560} dominantBaseline="central" fontSize={24}>
              infoinfoi nfoinfo
            </text>
            <text x={205} y={630} dominantBaseline="central" fontSize={24}>
              infoinfoi nfoinfo
            </text>
            <text x={205} y={660} dominantBaseline="central" fontSize={24}>
              infoinfoi nfoinfo
            </text>
            <text x={300} y={720} className={css(styles.switch)}
              dominantBaseline="central"
              fontSize={24}
              onClick={() => this.handlePageChange()}
            >
              <tspan className={css(styles.switchPager)}>
                page {this.state.page ? 1 : 2}
              </tspan>
            </text>
          </Board>
          <MainBoard
            x={10}
            y={25}
            width={280}
            height={80}
            text="Custom text"
            fontSize={32}
            isDark={this.state.isDark}
          />
          <V3Engine x={100} y={135}
            isDark={this.state.isDark}
            animationPause={this.state.animationPause}
          />
          <LightningEngine x={350} y={10} animationPause={this.state.animationPause} />
          <Boiler x={180} y={365} animationPause={this.state.animationPause} />
          <SteamEngine x={30} y={715} />
          <AdditionalTubes isDark={this.state.isDark} x={115} y={535} />
          <AdditionalTubes isDark={this.state.isDark} x={115} y={595} />
        </SVGcanvas>
        {intro}
      </div>
    )
  }
}

export default App
