import { StyleSheet } from 'aphrodite/no-important'


const styles = StyleSheet.create({
  app: {
    display: 'flex',
  },
  appBg: {
    background: 'linear-gradient(90deg, rgba(94,87,112,1) 0%, rgba(94,87,112,1) 50.999%, rgba(82,79,90,1) 51%, rgba(82,79,90,1) 100%)',
  },
  isDark: {
    backgroundColor: 'rgb(30, 30, 30)',
  },
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
