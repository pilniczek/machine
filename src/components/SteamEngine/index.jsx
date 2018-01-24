import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React, { Component } from 'react'
import s from '../config/SVGdefsClasses'
import EngineTube from '../EngineTube'
import Screw from '../Screw'
import SideScrew from '../SideScrew'
import styles from './styles'


class SteamEngine extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hover: false
    }

    this.updateHoverState = this.updateHoverState.bind(this)
  }

  updateHoverState (hover) {
    this.setState({ hover: hover })
  }

  render() {
    const { x, y } = this.props
    return (
      <g className={css(styles.steamEngine)}
        onMouseEnter={() => this.updateHoverState(true)}
        onMouseLeave={() => this.updateHoverState(false)}
      >
        {/* 30,700 */}
        <path className={css(s.creme)}
          d={`m${x},${y}
            c -35,0 -35,-60 0,-60
            l 150,0
            c 35,0 35,60 0,60`}
        />
        <rect className={css(s.creme)} x={x+20} y={y-60} width="65" height="35" />
        <Screw className={css(s.creme)} x={x+30} y={y-35} />
        <Screw className={css(s.creme)} x={x+75} y={y-35} />
        <SideScrew className={css(s.creme)} x={x+30} y={y-65} />
        <SideScrew className={css(s.creme)} x={x+75} y={y-65} />
        <path className={css(s.grass)}
          d={`m${x+170},${y-15}
            -30,0 0,15 -50,0 0,-15 -30,0 0,15 -50,0 0,-15 -30,0
            0,90 190,0 0,-90`}
        />
        <Screw className={css(s.creme)} x={x-5} y={y-5} />
        <Screw className={css(s.creme)} x={x+155} y={y-5} />
        <Screw className={css(s.creme)} x={x+75} y={y-5} />
        <rect className={css(s.creme)} x={x-10} y={y+10} width="75" height="55" />
        <EngineTube className={css(s.mint)} x={x+15} y={y+25} />
        <EngineTube className={css(s.mint)} x={x+35} y={y+25} />
        <EngineTube className={css(s.mint)} x={x+55} y={y+25} />
        <path className={css(s.grass)}
          d={`m${x+75},${y+40}
          c0,-40 80,-40 80,0
          l0,25 -80,0 0,-25`}
        />
        <Screw className={css(s.creme)} x={120} y={745} />
      </g> 
    )
  }
}

SteamEngine.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}


export default SteamEngine