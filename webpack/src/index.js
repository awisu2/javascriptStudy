let hello = (name) => {
  return `hello ${name}`
}

alert(hello('webpack'))

import sampleImage from './assets/sample.jpg'
let img = document.createElement('img')
img.src = sampleImage
document.body.appendChild(img)

import './css/style.scss'
import './css/style2.scss'
let style = document.createElement('link')
style.rel = "stylesheet"
style.href = "dist/css/bundle.css"
document.head.appendChild(style)
