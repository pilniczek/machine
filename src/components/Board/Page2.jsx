import { css } from 'aphrodite/no-important'
import React from 'react'
import s from '../config/SVGdefsClasses'
import Screw from '../Screw'
import styles from './styles'

const Page2 = ({x, y, isDark, style}) => (
  <g style={style} className={css(styles.page)}>
    <rect
      className={css(isDark ? s.whiteDark : s.white)}
      x={x+40} y={y+30} width={400-70} height="120"
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+50} y={y+40}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+50} y={y+140}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+400-40} y={y+40}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+400-40} y={y+140}
    />
    <rect
      className={css(isDark ? s.whiteDark : s.white)}
      x={x+70} y={y+160} width={400-90} height="180"
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+80} y={y+170}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+80} y={y+330}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+400-30} y={y+170}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+400-30} y={y+330}
    />
    <rect
      className={css(isDark ? s.whiteDark : s.white)}
      x={x+60} y={y+350} width={400-90} height="90"
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+70} y={y+360}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+70} y={y+430}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+400-40} y={y+360}
    />
    <Screw
      className={css(isDark ? s.cremeDark : s.creme)}
      x={x+400-40} y={y+430}
    />
    <text x={185} y={310} dominantBaseline="central" fontSize={24}>
      <tspan>
        Ha ha ha ha ha ha ha!
      </tspan>
      <tspan x={185} dy={30} dominantBaseline="central" fontSize={24}>
        Ha ha ha ha ha ha ha!
      </tspan>
      <tspan x={185} dy={30} dominantBaseline="central" fontSize={24}>
        Ha ha ha ha ha ha ha!
      </tspan>
    </text>
    <text x={215} y={440} dominantBaseline="central" fontSize={24}>
      <tspan>
        Ha ha ha ha ha ha ha!
      </tspan>
      <tspan x={215} dy={30} dominantBaseline="central" fontSize={24}>
        Ha ha ha ha ha ha ha!
      </tspan>
      <tspan x={215} dy={30} dominantBaseline="central" fontSize={24}>
        Ha ha ha ha ha ha ha!
      </tspan>
      <tspan x={215} dy={30} dominantBaseline="central" fontSize={24}>
        Ha ha ha ha ha ha ha!
      </tspan>
      <tspan x={215} dy={30} dominantBaseline="central" fontSize={24}>
        Ha ha ha ha ha ha ha!
      </tspan>
    </text>
    <text x={205} y={630} dominantBaseline="central" fontSize={24}>
      Ha ha ha ha ha ha ha!
    </text>
    <text x={205} y={660} dominantBaseline="central" fontSize={24}>
      Ha ha ha ha ha ha ha!
    </text>
  </g>
)

export default Page2