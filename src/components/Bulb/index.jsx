import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'
import styles from './styles'


const Bulb = ({x,y,color}) => (
  <g className={css(styles.bulb)}>
    <circle className={css(s.creme)} cx={x} cy={y} r="8"/>
    <circle className={css(styles[color])} cx={x} cy={y} r="5"/>
  </g>
)

Bulb.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}

export default Bulb