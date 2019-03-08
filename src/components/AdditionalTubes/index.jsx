import { css } from 'aphrodite/no-important'
import { bool } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'

const AdditionalTubes = ({isDark, x, y}) => (
  <g>
    <path className={css(isDark ? s.cremeDark : s.creme)}
      d={`m${x},${y} 0,5 5,0 0,50 -5,0 0,5 25,0 0,-5 -5,0 0,-50 5,0 0,-5`}
    />
  </g>
)

AdditionalTubes.propTypes = {
  isDark: bool,
}


export default AdditionalTubes