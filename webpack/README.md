## install
```
npm i -D webpack
node ./node_modules/webpack/bin/webpack.js --help
```

## create simple configuration and run

https://webpack.github.io/docs/configuration.html

```webpack.config.js
{
  entry: "./src",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
}
```

```package.json
  scripts : {
    ...
    "build": "webpack"
  }
```

```
mkdir -p src
touch src/index.js
npm run build
```

maked dist/bundle.js(empty function)

## add rule

webpack use xxx-loader plugin

```webpack.config.js
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

```src/index.js
let hello = (name) => {
  return `hello ${name}`
}

alert(hello('webpack'))
```

### babel setting
```.babelrc
{ "presets": ["env"] }
```

### install plugin and build
```
npm i -D babel-loader babel-core babel-preset-env
npm run build
```

check dist/bundle.js(empty function)

### user bundle.js

```index.html
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
```webpack.config.js
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

```
mkdir -p src/assets
```

add any images ander assets folder name 'sample.jpg'

```src/index.js
...,
import sampleImage from './assets/sample.jpg'
console.log('body', document.body)
let img = document.createElement('img')
img.src = sampleImage
document.body.appendChild(img)
```

install plugin and build

```
npm -D install url-loader
npm run build
```

## sepalete images to file
https://github.com/webpack-contrib/file-loader

add publicPath, change iamges loader to file-loader

```webpack.config.js
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

