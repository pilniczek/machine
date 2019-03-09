import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'

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
    {children}
  </g>
)

Board.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}

export default Board