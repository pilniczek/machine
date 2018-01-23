export const v = {
  mint: 'url(#mint)',
  sky: 'url(#sky)',
  grass: 'url(#grass)',
  white: 'url(#white)',
  creme: 'url(#creme)',
  yellow: 'url(#yellow)',
  dark: 'url(#dark)',
  mintDark: 'url(#mintDark)',
  skyDark: 'url(#skyDark)',
  grassDark: 'url(#grassDark)',
  whiteDark: 'url(#whiteDark)',
  cremeDark: 'url(#cremeDark)',
  yellowDark: 'url(#yellowDark)',
  darkDark: 'url(#darkDark)',
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
