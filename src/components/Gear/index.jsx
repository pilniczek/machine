import { css } from 'aphrodite/no-important'
import { bool, number, string } from 'prop-types'
import React, { Fragment } from 'react'
import s from '../config/SVGdefsClasses'
import styles from './styles'


const Gear = ({x,y,isDark,reverse,speed,size, animationPause}) => {
  let holesColor1 = isDark ? styles.c1Dark : styles.c1
  let teethColor = isDark ? styles.c2Dark : styles.c2
  let mainColor = isDark ? s.cremeDark : s.creme
  
  let gearSpin = reverse ? styles.spinReverse : styles.spin

  let gear
  if(size==='s'){
    gear = (<Fragment>
      <circle
        style={{
          animationPlayState: animationPause,
          animationDuration: speed,
          strokeWidth: '8',
          strokeDasharray: '.8%'
        }}
        className={css(gearSpin, teethColor)}
        cx={x} cy={y} r="20"
      />
      <circle className={css(mainColor)} cx={x} cy={y} r="20" />
      <circle
        style={{
          animationPlayState: animationPause,
          animationDuration: speed,
          strokeWidth: '8',
          strokeDasharray: '.7%'
        }}
        className={css(gearSpin, holesColor1)}
        cx={x} cy={y} r="11"
      />
    </Fragment>)
  }else if(size==='m'){
    gear = (<Fragment>
      <circle
        style={{
          animationPlayState: animationPause,
          animationDuration: speed,
          strokeWidth: '8',
          strokeDasharray: '.8%'
        }}
        className={css(gearSpin, teethColor)}
        cx={x} cy={y} r="40"
      />
      <circle className={css(mainColor)} cx={x} cy={y} r="40" />
      <circle
        style={{
          animationPlayState: animationPause,
          animationDuration: speed,
          strokeWidth: '22',
          strokeDasharray: '1.4%'
        }}
        className={css(gearSpin, holesColor1)}
        cx={x} cy={y} r="22"
      />
    </Fragment>)
  }else if(size==='ma'){
    gear = (<Fragment>
      <circle
        style={{
          animationPlayState: animationPause,
          animationDuration: speed,
          strokeWidth: '8',
          strokeDasharray: '.7%'
        }}
        className={css(gearSpin, teethColor)}
        cx={x} cy={y} r="35"
      />
      <circle className={css(mainColor)} cx={x} cy={y} r="35" />
      <circle
        style={{
          animationPlayState: animationPause,
          animationDuration: speed,
          strokeWidth: '35',
          strokeDasharray: '2%'
        }}
        className={css(gearSpin, holesColor1)}
        cx={x} cy={y} r="13"
      />
      <circle className={css(mainColor)} cx={x} cy={y} r="5" />
    </Fragment>)
  }else if(size==='l'){
    gear = (<Fragment>
      <circle
        style={{
          animationPlayState: animationPause,
          animationDuration: speed,
          strokeWidth: '8',
          strokeDasharray: '.8%'
        }}
        className={css(gearSpin, teethColor)}
        cx={x} cy={y} r="60"
      />
      <circle className={css(mainColor)} cx={x} cy={y} r="60" />
      <circle
        style={{
          animationPlayState: animationPause,
          animationDuration: speed,
          strokeWidth: '35',
          strokeDasharray: '2%'
        }}
        className={css(gearSpin, holesColor1)}
        cx={x} cy={y} r="35"
      />
    </Fragment>
    )
  }

  return (
    <g>{gear}</g>
  )
}
    
Gear.propTypes = {
  x: number,
  y: number,
  isDark: bool,
  reverse: bool,
  speed: string,
  size: string,
}


export default Gear