import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React, { Component } from 'react'
import s from '../config/SVGdefsClasses'
import EngineTube from '../EngineTube'
import Gear from '../Gear'
import Screw from '../Screw'
import styles from './styles'


class V3Engine extends Component {
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
    const { x, y, isDark } = this.props
    return (
      <g className={css(styles.v3Engine)}
        onMouseEnter={() => this.updateHoverState(true)}
        onMouseLeave={() => this.updateHoverState(false)}
      >
        <path className={css(s.creme,styles.pistonTop)}
          d={`m${x},${y-20} 60,0 0,10 -20,0 0,40 -20,0 0,-40 -20,0 0,-10`}
        />
        <path className={css(s.creme,styles.pistonLeft)}
          d={`m${x-55},${y+25} 40,-40 7,7 -15,15 40,40 -10,10 -40,-40 -15,15 -7,-7`}
        />
        <path className={css(s.creme,styles.pistonRight)}
          d={`m${x+115},${y+25} -40,-40 -7,7 15,15 -40,40 10,10 40,-40 15,15 7,-7`}
        />
        
        <path  className={css(s.grass)} d={`m${x},${y}
          15,0 0,5 30,0 0,-5 15,0 10,10 -5,5 20,20 5,-5 10,10 0,60 -140,0 
          0,-60 10,-10 5,5 20,-20 -5,-5 10,-10`}
        />
        
        <Screw x={x+5} y={y+10} className={css(s.creme)} />
        <Screw x={x+55} y={y+10} className={css(s.creme)} />
        <Screw x={x+90} y={y+43} className={css(s.creme)} />
        <Screw x={x-30} y={y+43} className={css(s.creme)} />
        
        <EngineTube x={x-20} y={y+60} className={css(s.mint)} />
        <EngineTube x={x-5} y={y+60} className={css(s.mint)} />
        <EngineTube x={x+10} y={y+60} className={css(s.mint)} />
        
        <EngineTube x={x+65} y={y+60} className={css(s.mint)} />
        <EngineTube x={x+80} y={y+60} className={css(s.mint)} />
        <EngineTube x={x+95} y={y+60} className={css(s.mint)} />
        
        <Gear speed="1s" size="ma" x={x+30} y={y+55} />
      </g>
    )
  }
}

V3Engine.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}


export default V3Engine