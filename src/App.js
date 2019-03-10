import './App.css'

import { css } from 'aphrodite/no-important'
import React, { Component } from 'react'
import { time, totalPages } from './components/config/variables'
import AdditionalTubes from './components/AdditionalTubes'
import Board from './components/Board'
import Page1 from './components/Board/Page1'
import Page2 from './components/Board/Page2'
import MainBoard from './components/MainBoard'
import Boiler from './components/Boiler'
import Gear from './components/Gear'
import LightningEngine from './components/LightningEngine'
import SteamEngine from './components/SteamEngine'
import SVGcanvas from './components/SVGcanvas'
import V3Engine from './components/V3Engine'
import styles from './styles'
import s from './components/config/SVGdefsClasses'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isDark: false,//true,
      page: 1,
      prevPage: 1,
      animationPause: 'paused',
    }

    this.setDark = this.setDark.bind(this)
    this.handleDarkChange = this.handleDarkChange.bind(this)

    this.setPage = this.setPage.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)

    this.setPrevPage = this.setPrevPage.bind(this)
    //this.handlePrevPageChange = this.handlePrevPageChange.bind(this)

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

  setPrevPage (prevPage) {
    this.setState({
      prevPage: prevPage
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
    if(this.state.animationPause === 'paused'){
      if(this.state.page !== totalPages){
        this.setPage(this.state.page + 1)
      }else{
        this.setPage(1)
      }
      this.setAnimationPause('running')
      setTimeout(() => {
        this.setAnimationPause('paused')
        this.setPrevPage(this.state.page)
      }, time)
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

    let content = []
    if (this.state.page === 1) {
      content[0] = true
      content[1] = false
    }
    if (this.state.page === 2) {
      content[0] = false
      content[1] = true
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
          <V3Engine x={100} y={135}
            isDark={this.state.isDark}
            animationPause={this.state.animationPause}
          />
          <LightningEngine x={350} y={10} animationPause={this.state.animationPause} />
          <MainBoard
            x={10}
            y={25}
            width={280}
            height={80}
            text="Custom text"
            fontSize={32}
            isDark={this.state.isDark}
          />
          <Board x={125} y={250} width={405} height={500}
            isDark={this.state.isDark}
          >
            <rect
              className={css(this.state.isDark ? s.grassDark : s.grass, styles.switch)}
              x={280} y={710} width={100} height="32"
              onClick={() => this.handlePageChange()}
            />
            <text x={330} y={728}
              className={css(styles.switch)}
              style={{opacity: content[0] ? 0 : 1}}
              onClick={() => this.handlePageChange()}
            >
              haha
            </text>
            <text x={330} y={728}
              className={css(styles.switch)}
              style={{opacity: content[1] ? 0 : 1}}
              onClick={() => this.handlePageChange()}
            >
              info
            </text>
            <Page1 x={125} y={250} displayed={content[0]}/>
            <Page2 x={125} y={250} displayed={content[1]}/>
          </Board>
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
