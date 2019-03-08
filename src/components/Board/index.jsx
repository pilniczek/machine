import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'
import Screw from '../Screw'

const Board = ({x, y, width, height, isDark, children}) => (
  <g>
    <rect
      className={css(isDark ? s.grassDark : s.grass)}
      x={x+10} y={y} width={width} height="10"
    />
    <rect
      className={css(isDark ? s.grassDark : s.grass)}
      x={x+20} y={y+10} width={width-20} height={height}
    />
    <rect
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+30} y={y+20} width={width-40} height={height-20}
    />
    <rect
      className={css(isDark ? s.whiteDark : s.white)}
      x={x+40} y={y+30} width={width-70} height="120"
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+50} y={y+40}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+50} y={y+140}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+width-40} y={y+40}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+width-40} y={y+140}
    />
    <rect
      className={css(isDark ? s.whiteDark : s.white)}
      x={x+70} y={y+160} width={width-90} height="180"
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+80} y={y+170}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+80} y={y+330}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+width-30} y={y+170}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+width-30} y={y+330}
    />
    <rect
      className={css(isDark ? s.whiteDark : s.white)}
      x={x+60} y={y+350} width={width-90} height="90"
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+70} y={y+360}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+70} y={y+430}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+width-40} y={y+360}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+width-40} y={y+430}
    />
    {children}
  </g>
)

Board.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}

export default Board