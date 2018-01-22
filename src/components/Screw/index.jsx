import { number } from 'prop-types'
import React from 'react'


const Screw = ({x,y,...rest}) => (
  <circle cx={x} cy={y} r="5" {...rest} />
)

Screw.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}

export default Screw