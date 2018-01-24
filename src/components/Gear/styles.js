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
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    transformOrigin: 'center center',
  },
  spinReverse: {
    animationName: keyframes.spinReverse,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    transformOrigin: 'center center',
  },
  c1: {
    strokeWidth: '35',
    strokeDasharray: '2% 1.9%',
    stroke: '#5e5770',
    fill: 'none',
  },
  c2: {
    strokeWidth: '7',
    strokeDasharray: '1%',
    stroke: 'gray',
    fill: 'none',
  },
  c1Dark: {
    strokeWidth: '35',
    strokeDasharray: '2% 1.9%',
    stroke: 'rgb(30, 30, 30)',
    fill: 'none',
  },
  c2Dark: {
    strokeWidth: '7',
    strokeDasharray: '1%',
    stroke: 'rgb(50, 50, 50)',
    fill: 'none',
  },
})

export default styles
