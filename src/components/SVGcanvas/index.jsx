import React from 'react'
import Iterator from '../Iterator'
import LinearGradient from '../LinearGradient'
import gradients from '../config/SVGdefsGradients'
import { css } from 'aphrodite/no-important'
import styles from './styles'


const SVGcanvas = ({children, width, height}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={css(styles.svg)}
    >
      <defs>
        <Iterator
            items={gradients.map((item) => {
              return({
                id: item.id,
                c1: item.c1,
                c2: item.c2,
              })
            })}
          Component={(props) => <LinearGradient {...props}/>}
        />
      </defs>
      {children}
    </svg>
  )
}

export default SVGcanvas