import { css } from 'aphrodite/no-important'
import { bool, number } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'
import Screw from '../Screw'
import SideScrew from '../SideScrew'
import styles from './styles'


const Boiler = ({x,y, isDark}) => (
  
  <g className={css(styles.boiler)}>
    <path className={css(s.grass, isDark && styles.isDark)}
      d={`m${x},${y} -30,0 0,-30 -130,0 0,200
        130,0 0,-30 30,0 
        -15,-15 -15,0 0,-110 15,0 15,-15
        0,140 -15,-15 0,-110`}
    />

    <rect className={css(s.creme, isDark && styles.isDark)} x={x-130} y={y-30} width="90" height="105" />
    <SideScrew x={x-115} y={y-35} className={css(s.creme, isDark && styles.isDark)} />
    <SideScrew x={x-85} y={y-35} className={css(s.creme, isDark && styles.isDark)} />
    <SideScrew x={x-55} y={y-35} className={css(s.creme, isDark && styles.isDark)} />
    <Screw x={x-115} y={y-10} className={css(s.creme, isDark && styles.isDark)} />
    <Screw x={x-55} y={y-10} className={css(s.creme, isDark && styles.isDark)} />
    <Screw x={x-115} y={y+25} className={css(s.creme, isDark && styles.isDark)} />
    <Screw x={x-55} y={y+25} className={css(s.creme, isDark && styles.isDark)} />
    <Screw x={x-115} y={y+60} className={css(s.creme, isDark && styles.isDark)} />
    <Screw x={x-55} y={y+60} className={css(s.creme, isDark && styles.isDark)} />
    <Screw x={x-85} y={y+60} className={css(s.creme, isDark && styles.isDark)} />
    <circle className={css(s.creme, isDark && styles.isDark)} cx={x-85} cy={y+10} r="24" />
    <circle className={css(s.sky, isDark && styles.isDark)} cx={x-85} cy={y+10} r="20" />
    <rect className={css(s.creme, isDark && styles.isDark)} x={x-160} y={y+110} width="90" height="60" />
    <SideScrew x={x-150} y={y+170} className={css(s.creme, isDark && styles.isDark)} />
    <SideScrew x={x-115} y={y+170} className={css(s.creme, isDark && styles.isDark)} />
    <SideScrew x={x-80} y={y+170} className={css(s.creme, isDark && styles.isDark)} />
    <SideScrew x={x-160} y={y+150} className={css(s.creme, isDark && styles.isDark)} transform={"rotate(90)"} style={{transformOrigin: 'center top'}} />
    <SideScrew x={x-160} y={y+120} className={css(s.creme, isDark && styles.isDark)} transform={"rotate(90)"} style={{transformOrigin: 'center top'}} />
    <Screw x={x-150} y={y+120} className={css(s.creme, isDark && styles.isDark)} />
    <Screw x={x-115} y={y+120} className={css(s.creme, isDark && styles.isDark)} />
    <Screw x={x-80} y={y+120} className={css(s.creme, isDark && styles.isDark)} />
    <Screw x={x-80} y={y+150} className={css(s.creme, isDark && styles.isDark)} />
    {
      //<PointerGroup x={x+185} y={y+430}scale(.8)" />
    }
  </g>
)

Boiler.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  isDark: bool,
}

Boiler.defaultProps = {
  isDark: false,
}

export default Boiler