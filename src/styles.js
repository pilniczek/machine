import { StyleSheet } from 'aphrodite/no-important'
import Color from 'color'


let darken = .15
let transformColor = (color,darken,saturate) => (
  Color(color).darken(darken).rgb().string()
)

const styles = StyleSheet.create({
  welcome: {
    position: 'absolute',
    width: '20vw',
    marginLeft: '-10vw',
    marginTop: '-5vw',
    left: '50vw',
    top: '50vh',
    zIndex: '100000',
    padding: '2vh 2vw',
    fontSize: '1.9vw',
  },
  ok: {
    padding: '10px',
    border: '1px solid black',    
    ':hover': {
      backgroundColor: 'red',
      cursor: 'pointer',
    }
  },
  text: {
    paddingBottom: '10px',
  }
})

export default styles
