import Color from 'color'


let darken = .15
let saturate = -.5
let darkenExtra = .7
let saturateExtra = -.9
let transformColor = (color,darken,saturate) => (
  Color(color).darken(darken).saturate(saturate).rgb().string()
)

const gradients = [
  {
    id: 'dark',
    c1: '#5e5770',
    get c2(){
      return transformColor(this.c1,darken,saturate)
    },
  },
  {
    id: 'darkDark',
    c1: transformColor('#5e5770', darkenExtra, saturateExtra),
    c2: transformColor('#5e5770', darkenExtra, saturateExtra),
  },
  {
    id: 'yellow',
    c1: '#fbc73a',
    c2: '#f4992b',
  },
  {
    id: 'yellowDark',
    c1: transformColor('#fbc73a', darkenExtra, saturateExtra),
    c2: transformColor('#fbc73a', darkenExtra, saturateExtra),
  },
  {
    id: 'creme',
    c1: '#fcfbe3',
    get c2(){
      return transformColor(this.c1,darken,saturate)
    },
  },
  {
    id: 'cremeDark',
    c1: transformColor('#fcfbe3', darkenExtra, saturateExtra),
    c2: transformColor('#fcfbe3', darkenExtra, saturateExtra),
  },
  {
    id: 'grass',
    c1: '#cae8a2',
    get c2(){
      return transformColor(this.c1,darken,saturate)
    },
  },
  {
    id: 'grassDark',
    c1: transformColor('#cae8a2', darkenExtra, saturateExtra),
    c2: transformColor('#cae8a2', darkenExtra, saturateExtra),
  },
  {
    id: 'sky',
    c1: '#889ba2',
    get c2(){
      return transformColor(this.c1,darken,saturate)
    },
  },
  {
    id: 'skyDark',
    c1: transformColor('#889ba2', darkenExtra, saturateExtra),
    c2: transformColor('#889ba2', darkenExtra, saturateExtra),
  },
  {
    id: 'mint',
    c1: '#d4f3e9',
    get c2(){
      return transformColor(this.c1,darken,saturate)
    },
  },
  {
    id: 'mintDark',
    c1: transformColor('#d4f3e9', darkenExtra, saturateExtra),
    c2: transformColor('#d4f3e9', darkenExtra, saturateExtra),
  },
  {
    id: 'white',
    c1: '#ffffff',
    get c2(){
      return transformColor(this.c1,darken,saturate)
    },
  },
  {
    id: 'whiteDark',
    c1: transformColor('#ffffff', darkenExtra, saturateExtra),
    c2: transformColor('#ffffff', darkenExtra, saturateExtra),
  },
]
export default gradients