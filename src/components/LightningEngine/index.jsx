import { css } from 'aphrodite/no-important'
import { bool, number } from 'prop-types'
import React from 'react'
import Bulb from '../Bulb'
import s from '../config/SVGdefsClasses'
import EngineTube from '../EngineTube'
import Meter from '../Meter'
import styles from './styles'


const LightningEngine = ({x,y,isDark}) => (
  <g className={css(styles.lightningEngine)}>
    <path className={css(s.grass, isDark && styles.isDark)}
      d={`m${x},${y} l0,100 l105,0 l0,-20 l50,0
        l0,20 l35,0 l0,-100 z`}
    />
    <path className={css(s.creme, isDark && styles.isDark)}
      d={`m${x},${y} 0,15 l5,0 l5,-7 l50,0 l5,7
        l30,0 l5,-7 l50,0 l5,7 l20,0
        l5,-7 l10,0 l0,-10 l-190,0`}
    />
    <path className={css(s.yellow, isDark && styles.isDark)}
      d={`m${x+25},${y+20} l17,0 l-13,15 l13,0 l-20,25 l3,-17 l-13,2z`}
    />
    <Bulb x={x+60} y={y+40} color="red" />
    <Bulb x={x+80} y={y+40} color="green" />
    <Meter x={x+145} y={y+60} />
    <EngineTube x={x+30} y={y+80} className={css(s.mint, isDark && styles.isDark)} />
    <EngineTube x={x+45} y={y+80} className={css(s.mint, isDark && styles.isDark)} />
    <EngineTube x={x+60} y={y+80} className={css(s.mint, isDark && styles.isDark)} />
    <EngineTube x={x+75} y={y+80} className={css(s.mint, isDark && styles.isDark)} />
    <EngineTube x={x+90} y={y+80} className={css(s.mint, isDark && styles.isDark)} />
    {
      //<PointerGroup x={x+185} y={y+430} />
    }
    <path className={css(s.mint, s.o9, isDark && styles.isDark)}
      d={`m${x+122.5},${y+80}
        -5,5 0,10 5,5
        -5,5 0,10 5,5
        -5,5 0,10 5,5
        -5,5 0,10 5,5
        -5,5 0,10 5,5
        -5,5 0,10 5,5
        -5,5 0,10 5,5
        -5,5 0,10 5,5
        15,0
        5,-5 0,-10 -5,-5
        5,-5 0,-10 -5,-5
        5,-5 0,-10 -5,-5
        5,-5 0,-10 -5,-5
        5,-5 0,-10 -5,-5
        5,-5 0,-10 -5,-5
        5,-5 0,-10 -5,-5
        5,-5 0,-10 -5,-5
        z`}
    />
  </g>
)

LightningEngine.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  isDark: bool,
}

LightningEngine.defaultProps = {
  isDark: false,
}

export default LightningEngine