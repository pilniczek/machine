import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'


//import styles from './styles'


const EngineTube = ({x,y}) => (
  <path
    className={css(s.mint)}
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