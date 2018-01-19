import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'


const Screw = ({x,y},rest) => (
  <circle className={css(s.creme)} cx={x} cy={y} r="5" {...rest}/>
)

Screw.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}

export default Screw