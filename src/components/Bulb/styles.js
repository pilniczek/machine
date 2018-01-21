import { StyleSheet } from 'aphrodite/no-important'


const keyframes = {
  blinkGreen: {
    '0%': {
      filter: 'drop-shadow( 0px 0px 5px green )',
    },
    '80%': {
      filter: 'drop-shadow( 0px 0px 5px green )',
    },
    '81%': {
      filter: 'drop-shadow( 0px 0px 0px green )',
    },
    '100%': {
      filter: 'drop-shadow( 0px 0px 0px green )',
    },
  },
  blinkRed: {
    '0%': {
      filter: 'drop-shadow( 0px 0px 0px red )',
    },
    '80%': {
      filter: 'drop-shadow( 0px 0px 0px red )',
    },
    '81%': {
      filter: 'drop-shadow( 0px 0px 5px red )',
    },
    '100%': {
      filter: 'drop-shadow( 0px 0px 5px red )',
    },
  },
}

const styles = StyleSheet.create({
  bulb: {
    stroke: 'rgba(0,0,0,.4)',
    strokeWidth: .5,
  },
  red: {
    fill: 'red',
    animationName: keyframes.blinkRed,
    animationDuration: '5s',
    animationIterationCount: 'infinite',
    /* animation: 'blinkRed 5s linear infinite', */
  },
  green: {
    fill: 'green',
    animationName: keyframes.blinkGreen,
    animationDuration: '5s',
    animationIterationCount: 'infinite',
    /* animation: 'blinkGreen 5s linear infinite', */
  },
})

export default styles
