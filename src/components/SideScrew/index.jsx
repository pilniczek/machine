import { number } from 'prop-types'
import React from 'react'


const SideScrew = ({x,y, ...rest}) => {
  return (
    <rect x={x-5} y={y} width="10" height="5" {...rest} />
  )
}

SideScrew.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}


export default SideScrew