import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'
import Screw from '../Screw'


const Board = ({x,y,isDark}) => (
  <g>
    <rect className={css(isDark ? s.grassDark : s.grass)} x={x} y={y} width="370" height="10" />
    <rect className={css(isDark ? s.grassDark : s.grass)} x={x+20} y={y+10} width="330" height="430" />
    <rect className={css(isDark ? s.cremeDark : s.creme)} x={x+30} y={y+20} width="310" height="410" />
    <rect className={css(isDark ? s.whiteDark : s.white)} x={x+50} y={y+30} width="280" height="120" />
    <Screw x={x+60} y={y+40} className={css(isDark ? s.cremeDark : s.creme)} />
    <Screw x={x+60} y={y+140} className={css(isDark ? s.cremeDark : s.creme)} />
    <Screw x={x+320} y={y+40} className={css(isDark ? s.cremeDark : s.creme)} />
    <Screw x={x+320} y={y+140} className={css(isDark ? s.cremeDark : s.creme)} />
    <rect className={css(isDark ? s.whiteDark : s.white)} x={x+40} y={y+160} width="260" height="170" />
    <Screw x={x+50} y={y+170} className={css(isDark ? s.cremeDark : s.creme)} />
    <Screw x={x+50} y={y+320} className={css(isDark ? s.cremeDark : s.creme)} />
    <Screw x={x+290} y={y+170} className={css(isDark ? s.cremeDark : s.creme)} />
    <Screw x={x+290} y={y+320} className={css(isDark ? s.cremeDark : s.creme)} />
    <rect className={css(isDark ? s.whiteDark : s.white)} x={x+70} y={y+340} width="220" height="80" />
    <Screw x={x+80} y={y+350} className={css(isDark ? s.cremeDark : s.creme)} />
    <Screw x={x+80} y={y+410} className={css(isDark ? s.cremeDark : s.creme)} />
    <Screw x={x+280} y={y+350} className={css(isDark ? s.cremeDark : s.creme)} />
    <Screw x={x+280} y={y+410} className={css(isDark ? s.cremeDark : s.creme)} />
  </g>
)
    
Board.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}


export default Board