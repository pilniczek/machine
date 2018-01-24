import { css } from 'aphrodite/no-important'
import { bool } from 'prop-types'
import React from 'react'
import s from '../config/SVGdefsClasses'
import Screw from '../Screw'


const AdditionalTubes = ({isDark}) => (
  <g>
    <rect className={css(isDark ? s.cremeDark : s.creme)} x="150" y="40" width="170" height="60"/>
    <Screw className={css(isDark ? s.cremeDark : s.creme)} x={160} y={50}/>
    <Screw className={css(isDark ? s.cremeDark : s.creme)} x={310} y={50}/>
    <Screw className={css(isDark ? s.cremeDark : s.creme)} x={160} y={90}/>
    <Screw className={css(isDark ? s.cremeDark : s.creme)} x={310} y={90}/>
    <path className={css(isDark ? s.cremeDark : s.creme)}
        d="m115,520 0,5 5,0 0,50 -5,0 0,5 25,0 0,-5 -5,0 0,-50 5,0 0,-5" 
      />
    <path className={css(isDark ? s.cremeDark : s.creme)}
      d="m115,580 0,5 5,0 0,50 -5,0 0,5 25,0 0,-5 -5,0 0,-50 5,0 0,-5" 
    />    
    <path className={css(isDark ? s.cremeDark : s.creme)}
      d="m200,740
        10,0 20,-20 0,-365 10,-10 0,-15 -10,10
        -60,-60 -100,0 0,10 95,0 55,55
        0,370 -15,15 -5,0 0,10"
    />
  </g>
)
    
AdditionalTubes.propTypes = {
  isDark: bool,
}


export default AdditionalTubes