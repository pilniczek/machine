import { StyleSheet } from 'aphrodite/no-important'


export const keyframes = {
  pistonTop: {
    '0%': {
      transform: 'translateY(10px)',
    },
    '50%': {
      transform: 'translateY(0px)',
    },
    '100%': {
      transform: 'translateY(10px)',
    },
  },
  pistonLeft: {
    '0%': {
      transform: 'translate(0px, 0px)',
    },
    '50%': {
      transform: 'translate(8px, 8px)',
    },
    '100%': {
      transform: 'translate(0px, 0px)',
    },
  },
  pistonRight: {
    '0%': {
      transform: 'translate(0px, 0px)',
    },
    '50%': {
      transform: 'translate(-8px,8px)',
    },
    '100%': {
      transform: 'translate(0px, 0px)',
    },
  },
}

const styles = StyleSheet.create({
  pistonTop: {
    transformBox: 'fill-box',
    animationName: keyframes.pistonTop,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    transformOrigin: 'center center',
    animationDuration: '.5s',
  },
  pistonLeft: {
    transformBox: 'fill-box',
    animationName: keyframes.pistonLeft,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    transformOrigin: 'center center',
    animationDuration: '.5s',
  },
  pistonRight: {
    transformBox: 'fill-box',
    animationName: keyframes.pistonRight,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    transformOrigin: 'center center',
    animationDuration: '.5s',
  },
})

export default styles
