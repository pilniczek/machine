import { css } from 'aphrodite/no-important'
import { bool, number } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'
import styles from './styles'


const Meter = ({x,y,isDark,...rest}) => (  
  <g {...rest}>
    <circle className={css(isDark ? s.cremeDark : s.creme)}
      cx={x-15} cy={y-15} r="24"
    />
    <path className={css(isDark ? s.whiteDark : s.white)}
      d={`m${x},${y-2} a20,20 0 1,0 -30,0 l15,-12 l15,12`}
    />
    <path className={css(styles.numbers)}
      d={`m${x-3},${y-9} a13,13 0 1,0 -23,0`}
    />
    <path style={{transformOrigin: `${x-15}px ${y-12}px`}}
      className={css(styles.ticking, isDark ? styles.redDark : styles.red)}
      d={`m${x-15},${y-14} 0,-10`}
    />
  </g>
)
    
Meter.propTypes = {
  x: number,
  y: number,
  isDark: bool,
}


export default Meter