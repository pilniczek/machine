import { string } from 'prop-types'
import React from 'react'


const LinearGradient = ({id, c1, c2}) => {
  return (
    <linearGradient id={id} >
      <stop offset="0%" style={{stopColor:c1}} />
      <stop offset="50.999%" style={{stopColor:c1}} />
      <stop offset="51%" style={{stopColor:c2}} />
      <stop offset="100%" style={{stopColor:c2}} />
    </linearGradient>
   )
}

 LinearGradient.propTypes = {
  id: string.isRequired,
  c1: string.isRequired,
  c2: string.isRequired,
}

export default LinearGradient