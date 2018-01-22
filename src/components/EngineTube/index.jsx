import { number } from 'prop-types'
import React from 'react'


const EngineTube = ({x,y,...rest}) => (
  <path {...rest}
    d={`m ${x},${y}
       a 7,7 0 0,0 -15,0
       l 0,25
       a 7,7 0 0,0 15,0
       z`}
  />
)

EngineTube.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}

export default EngineTube