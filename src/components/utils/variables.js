export const svg = {
  mint:{
    fill: 'url(#mint)'
  },
  sky:{
    fill: 'url(#sky)'
  },
  grass:{
    fill: 'url(#grass)'
  },
  white:{
    fill: 'url(#white)'
  },
  creme:{
    fill: 'url(#creme)'
  },
  yellow:{
    fill: 'url(#yellow)'
  },
  dark:{
    fill: 'url(#dark)'
  },
}
export const animation = {
  bulbRed: {
    fill: 'red',
    animation: 'blinkRed 5s linear infinite',
  },
  bulbGreen: {
    fill: 'green',
    animation: 'blinkGreen 5s linear infinite',
  },
  tick: {
    stroke: 'red',
    strokeWidth: '2',
    strokeLinecap: 'round',
    animation: 'tick 5s linear infinite',
    transformOrigin: '-15px -12px',
    transformBox: 'fill-box', // Firefox - you boy!
  },
  tock: {
    animation: 'tock 4s linear infinite',
    transformOrigin: 'center center',
    transformBox: 'fill-box', // Firefox - you boy!
  },
  tockReverse: {
    animation: 'tockReverse 2s linear infinite',
    transformOrigin: 'center center',
    transformBox: 'fill-box', // Firefox - you boy!
  },
}
export const keyframes = {
  blinkGreen: `@keyframes blinkGreen {
    0% { filter: drop-shadow( 0px 0px 5px green ); }
    80% { filter: drop-shadow( 0px 0px 5px green ); }
    81% { filter: drop-shadow( 0px 0px 0px green ); }
    100% { filter: drop-shadow( 0px 0px 0px green ); }
  }`,
  blinkRed: `@keyframes blinkRed {
    0% { filter: drop-shadow( 0px 0px 0px red ); }
    80% { filter: drop-shadow( 0px 0px 0px red ); }
    81% { filter: drop-shadow( 0px 0px 5px red ); }
    100% { filter: drop-shadow( 0px 0px 5px red ); }
  }`,
  tick: `@keyframes tick {
    0% { transform: rotate(-90deg); }
    90% { transform: rotate(90deg); }
    98% { transform: rotate(90deg); }
    100% { transform: rotate(-90deg); }
  }`,
  tock: `@keyframes tock {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }`,
  tockReverse: `@keyframes tockReverse {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }`,
}
