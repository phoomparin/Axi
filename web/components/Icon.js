import React from 'react'

const icons = {
  add: {
    i: `M436 238H242V44c0-6.6-5.4-12-12-12h-12c-6.6 0-12 5.4-12 12v194H12c-6.6 0-12
        5.4-12 12v12c0 6.6 5.4 12 12 12h194v194c0 6.6 5.4 12 12 12h12c6.6 0 12-5.4
        12-12V274h194c6.6 0 12-5.4 12-12v-12c0-6.6-5.4-12-12-12z`,
    vb: '0 0 448 512'
  },
  close: {
    i: `M217.5 256l137.2-137.2c4.7-4.7 4.7-12.3 0-17l-8.5-8.5c-4.7-4.7-12.3-4.7-17
    0L192 230.5 54.8 93.4c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17L166.5
    256 29.4 393.2c-4.7 4.7-4.7 12.3 0 17l8.5 8.5c4.7 4.7 12.3 4.7 17 0L192 281.5l137.2
    137.2c4.7 4.7 12.3 4.7 17 0l8.5-8.5c4.7-4.7 4.7-12.3 0-17L217.5 256z`,
    vb: '0 0 384 512'
  },
  left: {
    i: `M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0
    17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17
    0L25 264.5c-4.6-4.7-4.6-12.3.1-17z`,
    vb: '0 0 192 512'
  }
}

const Icon = ({i}) => (
  <svg viewBox={icons[i].vb}>
    <path d={icons[i].i} />
  </svg>
)

export default Icon
