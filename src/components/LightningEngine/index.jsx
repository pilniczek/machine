import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React from 'react'
import Bulb from '../Bulb'
import s from '../config/SVGdefsClasses'
import EngineTube from '../EngineTube'
import styles from './styles'


const LightningEngine = ({x,y}) => (
  <g className={css(styles.lightningEngine)}>
    <path className={css(s.mint, s.o9)}
      d={`m${x},${y}
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
    <path className={css(s.grass)}
      d="m345,20 l0,100 l105,0 l0,-20 l50,0
          l0,20 l35,0 l0,-100 z"
    />
    <path className={css(s.creme)}
      d="m345,37 l5,0 l5,-7 l50,0 l5,7
          l30,0 l5,-7 l50,0 l5,7 l20,0
          l5,-7 l10,0 l0,-10 l-190,0z"
    />
    <path className={css(s.yellow)}
      d="m368,45 l17,0 l-13,15 l13,0 l-20,25 l3,-17 l-13,2z"
    />
    <Bulb x={410} y={60} color="red" />
    <Bulb x={430} y={60} color="green" />
    <EngineTube x={375} y={100} />
    <EngineTube x={390} y={100} />
    <EngineTube x={405} y={100} />
    <EngineTube x={420} y={100} />
    {
      //<PointerGroup x={x+185} y={y+430}scale(.8)"/>
    }
  </g>
)

LightningEngine.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}

export default LightningEngine