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
    stroke: 'red',
    strokeWidth: '2',
    strokeLinecap: 'round',
    transformOrigin: '-15px -12px',
    animationName: keyframes.ticking,
    animationDuration: '5s',
    animationIterationCount: 'infinite',
    //animation: 'tick 5s linear infinite',
  },
})

export default styles
