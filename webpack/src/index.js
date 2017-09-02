let hello = (name) => {
  return `hello ${name}`
}

alert(hello('webpack'))

import sampleImage from './assets/sample.jpg'
console.log('body', document.body)
let img = document.createElement('img')
img.src = sampleImage
document.body.appendChild(img)
