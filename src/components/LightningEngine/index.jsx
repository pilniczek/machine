import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React from 'react'
import Bulb from '../Bulb'
import s from '../config/SVGdefsClasses'
import EngineTube from '../EngineTube'
import styles from './styles'


const LightningEngine = ({x,y}) => (
  <g className={css(styles.lightningEngine)}>
    <g className={css(styles.hover__dark)}>
      <path className={css(s.grass)}
        d={`m${x},${y} l0,100 l105,0 l0,-20 l50,0
          l0,20 l35,0 l0,-100 z`}
      />
      <path className={css(s.creme)}
        d={`m${x},${y} 0,15 l5,0 l5,-7 l50,0 l5,7
          l30,0 l5,-7 l50,0 l5,7 l20,0
          l5,-7 l10,0 l0,-10 l-190,0`}
      />
      <path className={css(s.yellow)}
        d={`m${x+25},${y+20} l17,0 l-13,15 l13,0 l-20,25 l3,-17 l-13,2z`}
      />
      <Bulb x={x+60} y={y+40} color="red" />
      <Bulb x={x+80} y={y+40} color="green" />
      <EngineTube x={x+30} y={y+80} />
      <EngineTube x={x+45} y={y+80} />
      <EngineTube x={x+60} y={y+80} />
      <EngineTube x={x+75} y={y+80} />
      <EngineTube x={x+90} y={y+80} />
      {
        //<PointerGroup x={x+185} y={y+430} />
      }
      <path className={css(s.mint, s.o9)}
        d={`m${x+122.5},${y+80}
          -5,5 0,10 5,5
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
          5,-5 0,-10 -5,-5
          z`}
      />
    </g>
  </g>
)

LightningEngine.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}

export default LightningEngine