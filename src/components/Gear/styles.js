import { StyleSheet } from 'aphrodite/no-important'


export const keyframes = {
  spin: {
    'from': {
      transform: 'rotate(0deg)',
    },
    'to': {
      transform: 'rotate(360deg)',
    }
  },
  spinReverse: {
    'from': {
      transform: 'rotate(0deg)',
    },
    'to': {
      transform: 'rotate(-360deg)',
    }
  },
}

const styles = StyleSheet.create({
  spin: {
    animationName: keyframes.spin,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    transformOrigin: 'center center',
  },
  spinReverse: {
    animationName: keyframes.spinReverse,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    transformOrigin: 'center center',
  },
  c1: {
    stroke: '#5e5770',
    fill: 'none',
  },
  c2: {
    stroke: 'gray',
    fill: 'none',
  },
  c1Dark: {
    stroke: 'rgb(30, 30, 30)',
    fill: 'none',
  },
  c2Dark: {
    stroke: 'rgb(50, 50, 50)',
    fill: 'none',
  },
})

export default styles
