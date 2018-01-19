import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'


const SideScrew = ({x,y, transform, style}) => {
  return (
    <rect className={css(s.creme)} x={x-5} y={y} width="10" height="5" transform={transform} style={style} />
  )
}

SideScrew.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}

export default SideScrew