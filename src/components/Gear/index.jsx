import { css } from 'aphrodite/no-important'
import { bool, number } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'
import styles from './styles'


const Gear = ({x,y,isDark,isSmall}) => {
  let gear
  if(isSmall){
    gear = (
    <g id="smallGear">
      <circle className={css(isDark ? s.cremeDark : s.creme)} cx={x} cy={y} r="35" />
      <circle className={css(styles.spinReverse, isDark ? styles.c1Dark : styles.c1)} cx={x} cy={y} r="13" />
      <circle className={css(styles.spinReverse, isDark ? styles.c2Dark : styles.c2)} cx={x} cy={y} r="38" />
      <circle className={css(isDark ? s.cremeDark : s.creme)} cx={x} cy={y} r="5" />
    </g>)
  }else{
    gear = (
    <g id="gear">
      <circle className={css(isDark ? s.cremeDark : s.creme)} cx={x} cy={y} r="60" />
      <circle className={css(styles.spin, isDark ? styles.c1Dark : styles.c1)} cx={x} cy={y} r="35" />
      <circle className={css(styles.spin, isDark ? styles.c2Dark : styles.c2)} cx={x} cy={y} r="63" />
    </g>)
  }
  return (
    <g>{gear}</g>
  )
}
    
Gear.propTypes = {
  x: number,
  y: number,
  isDark: bool,
  isSmall: bool,
}


export default Gear