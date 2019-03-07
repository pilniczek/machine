import { css } from 'aphrodite/no-important'
import { bool } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'
import Screw from '../Screw'

const AdditionalTubes = ({isDark, positionX, positionY, width, height, text, fontSize}) => (
  <g>
    <rect
      className={css(isDark ? s.cremeDark : s.creme)}
      x={positionX}
      y={positionY}
      width={width}
      height={height}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={positionX + 10}
      y={positionY + 10}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={positionX + width - 10}
      y={positionY + 10}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={positionX + 10}
      y={positionY + height - 10}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={positionX + width - 10}
      y={positionY + height - 10}
    />
    <text
      x={positionX + (width / 2)}
      y={positionY + (height / 2)}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={fontSize}
    >
      {text}
    </text>
    <path className={css(isDark ? s.cremeDark : s.creme)}
        d="m115,520 0,5 5,0 0,50 -5,0 0,5 25,0 0,-5 -5,0 0,-50 5,0 0,-5" 
      />
    <path className={css(isDark ? s.cremeDark : s.creme)}
      d="m115,580 0,5 5,0 0,50 -5,0 0,5 25,0 0,-5 -5,0 0,-50 5,0 0,-5" 
    />  
  </g>
)
    
AdditionalTubes.propTypes = {
  isDark: bool,
}


export default AdditionalTubes