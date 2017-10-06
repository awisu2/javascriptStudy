## install
```
npm i -D webpack
node ./node_modules/webpack/bin/webpack.js --help
```

## create simple configuration and run

https://webpack.github.io/docs/configuration.html

**webpack.config.js**

```javascript
{
  entry: "./src",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
}
```

**package.json**

```json
  scripts : {
    ...
    "build": "webpack"
  }
```

```shell
mkdir -p src
touch src/index.js
npm run build
```

maked dist/bundle.js(empty function)

## add rule

webpack use xxx-loader plugin

**webpack.config.js**

```javascript
{
  context: __dirname + "/src",
  entry: "./entry",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
    ]
  }
}
```

**src/index.js**

```javascript
let hello = (name) => {
  return `hello ${name}`
}

alert(hello('webpack'))
```

### babel setting

.babelrc

```json
{ "presets": ["env"] }
```

### install plugin and build

```shell
npm i -D babel-loader babel-core babel-preset-env
npm run build
```

check dist/bundle.js(empty function)

### user bundle.js

**index.html**

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>
  <h1>webpack study</h1>
  <script src="./dist/bundle.js"></script>
</body>
</html>
```

## add .gitignore
base .gitignore

https://github.com/webpack/webpack/blob/master/.gitignore

add

```
dist/
```

## add rule images
**webpack.config.js**

```javascript
  ...,
  module: {
    rules: [
      ...,
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader'
      }
    ]
  }
```

```shell
mkdir -p src/assets
```

add any images ander assets folder name 'sample.jpg'

**src/index.js**

```javascript
...,
import sampleImage from './assets/sample.jpg'
console.log('body', document.body)
let img = document.createElement('img')
img.src = sampleImage
document.body.appendChild(img)
```

install plugin and build

```shell
npm -D install url-loader
npm run build
```

## sepalete images to file
https://github.com/webpack-contrib/file-loader

add publicPath, change iamges loader to file-loader

**webpack.config.js**

```javascript
module.exports = {
  entry: "./src",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'assets/',
        }
      }
    ]
  }
};
```

```
npm -D install file-loader
npm run build
```

## add rule scss
https://github.com/webpack-contrib/sass-loader

```javascript
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'bundle': "./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'assets/',
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ],
  },
  plugins: [
    // [name] is entry name
    new ExtractTextPlugin('css/[name].css')
  ]
};
```

**index.js**

```javascript
...
import './css/style.scss'
import './css/style2.scss'
let style = document.createElement('link')
style.rel = "stylesheet"
style.href = "dist/css/bundle.css"
document.head.appendChild(style)
```

```shell
npm install -D style-loader css-loader sass-loader node-sass extract-text-webpack-plugin
```