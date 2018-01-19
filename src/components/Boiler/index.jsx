import { css } from 'aphrodite/no-important'
import { number } from 'prop-types'
import React from 'react'
import Screw from '../Screw'
import SideScrew from '../SideScrew'
import s from '../config/SVGdefsClasses'
import styles from './styles'


const Boiler = ({x,y}) => (
  
  <g className={css(styles.boiler)}>
    <path className={css(s.grass)}
      d={`m${x},${y} -30,0 0,-30 -130,0 0,200
        130,0 0,-30 30,0 
        -15,-15 -15,0 0,-110 15,0 15,-15
        0,140 -15,-15 0,-110`}
    />
    <rect className={css(s.creme)} x={50} y={320} width="90" height="105"/>
    <SideScrew x={60} y={315} className={css(s.creme)}/>
    <SideScrew x={130} y={315} className={css(s.creme)}/>
    <SideScrew x={95} y={315} className={css(s.creme)}/>
    <Screw x={60} y={340} className={css(s.creme)}/>
    <Screw x={130} y={340} className={css(s.creme)}/>
    <Screw x={60} y={380} className={css(s.creme)}/>
    <Screw x={130} y={380} className={css(s.creme)}/>
    <Screw x={60} y={415} className={css(s.creme)}/>
    <Screw x={130} y={415} className={css(s.creme)}/>
    <Screw x={95} y={415} className={css(s.creme)}/>
    <circle className={css(s.creme)} cx={95} cy={360} r="24"/>
    <circle className={css(s.sky)} cx={95} cy={360} r="20"/>
    <rect className={css(s.creme)} x={20} y={460} width="90" height="60"/>
    <SideScrew x={30} y={520} className={css(s.creme)}/>
    <SideScrew x={65} y={520} className={css(s.creme)}/>
    <SideScrew x={100} y={520} className={css(s.creme)}/>
    <SideScrew x={20} y={500} transform={"rotate(90)"} style={{transformOrigin: 'center top'}}/>
    <SideScrew x={20} y={470} transform={"rotate(90)"} style={{transformOrigin: 'center top'}}/>
    <Screw x={30} y={470} className={css(s.creme)}/>
    <Screw x={65} y={470} className={css(s.creme)}/>
    <Screw x={100} y={470} className={css(s.creme)}/>
    <Screw x={100} y={500} className={css(s.creme)}/>
    {
      //<PointerGroup x={x+185} y={y+430}scale(.8)"/>
    }
  </g>
)

Boiler.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
}

export default Boiler