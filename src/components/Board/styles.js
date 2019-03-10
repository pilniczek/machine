import { StyleSheet } from 'aphrodite/no-important'
import { time } from '../config/variables'

const styles = StyleSheet.create({
  originTopLeft: {
    transformOrigin: 'top left',
  },
  originTopRight: {
    transformOrigin: 'top right',
  },
  originbottomLeft: {
    transformOrigin: 'bottom left',
  },
  originBottomRight: {
    transformOrigin: 'bottom right',
  },
  hideLeft: {
    transition: `transform ${time}ms`,
    transform: 'rotate(90deg)',
  },
  hideRight: {
    transition: `transform ${time}ms`,
    transform: 'rotate(-90deg)',
  },
  show: {
    transition: `transform ${time}ms`,
    transform: 'rotate(0deg)',
  },
})

export default styles
