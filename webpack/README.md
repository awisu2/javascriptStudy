## install
```
npm i -D webpack
node ./node_modules/webpack/bin/webpack.js --help
```

## create simple configuration and run

https://webpack.github.io/docs/configuration.html

```webpack.config.js
{
  context: __dirname + "/src",
  entry: "./entry",
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
mkdir -p src/entry
touch src/entry/index.js
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

```app/entry/index.js
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

