import { StyleSheet } from 'aphrodite/no-important'


export const keyframes = {
  ticking: {
    '0%': {
      transform: 'rotate(-90deg)',
    },
    '90%': {
      transform: 'rotate(90deg)',
    },
    '98%': {
      transform: 'rotate(90deg)',
    },
    '100%': {
      transform: 'rotate(-90deg)',
    },
  },
}

const styles = StyleSheet.create({
  ticking: {
    transformBox: 'fill-box',
    animationName: keyframes.ticking,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationDuration: '5s',
    stroke: 'red',
    strokeWidth: '2',
    strokeLinecap: 'round',
  },
  numbers: {
    strokeWidth: '4',
    strokeDasharray: '1 4',
    fill: 'none',
  }
})

export default styles