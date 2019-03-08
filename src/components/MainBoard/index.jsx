import { css } from 'aphrodite/no-important'
import { bool } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'
import Screw from '../Screw'

const MainBoard = ({isDark, x, y, width, height, text, fontSize}) => (
  <g>
    <rect
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x}
      y={y}
      width={width}
      height={height}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x + 10}
      y={y + 10}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x + width - 10}
      y={y + 10}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x + 10}
      y={y + height - 10}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x + width - 10}
      y={y + height - 10}
    />
    <text
      x={x + (width / 2)}
      y={y + (height / 2)}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={fontSize}
    >
      {text}
    </text>
  </g>
)

MainBoard.propTypes = {
  isDark: bool,
}

export default MainBoard