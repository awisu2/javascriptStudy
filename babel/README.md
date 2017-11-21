babel study

- http://es6-features.org

## usage

### 1. install

```shell
npm i -g babel-cli
npm i -D babel-preset-env
```

**.bberlrc**

```
{ "presets": ["env"] }
```

### 2. auto compile

```shell
cd ${directory}
bable -w js_modan -d js
```

### 3. develop

editing js_modan directory.<br>
auto compile to js direcory.

## usage if you want require command for front

bable is not suport imort front, so use browserify.<br>
this sample compile automaticaly.<br>
with npm packages path, fs-extra, babelify, vinyl-source-stream.<br>

### 1. insall

```shell
npm i -D gulp path fs-extra browserify babelify vinly-sourcestream
```

### 2. easy use

only need file use require command.<br>
[take care] browserify is not covert ms6.<br>
after convert bable convert.<br>

```shell
browserify js_modan/ms6.js -o js/ms6.js
```

### 3. automaticaly convert

this command use gulpfile.js.<br>
please change gulpfile.js settings. (SRC DIST)

```
gulp
```

## command sample

### compile

#### one file

```
bable js_modan/sample.js -o js/sample.js
```

#### directory

```shell
babel js_modan -d js
```

#### auto compile

```shell
babel -w js_modan -d js
```

### easy commands

```shell
npm i -D babel-cli babel-preset-env
echo '{ "presets": ["env"] }' > .babelrc
mkdir src
cat << EOF >> src/index.js
const Test = class {
  static hello() {
    return 'hello world'
  }
}
console.log(Test.hello())
EOF
babel src -d dist
node dist/index.js
```


#### add dev command

```bash
npm i -D fs-extra
```

```bash
node << EOF
let fs = require('fs-extra')
let fileName = 'package.json'

let f = fs.readFileSync(fileName, 'utf8')
let config = JSON.parse(f)
config.scripts = config.scripts ? config.scripts : {}
let scripts = {
  build : 'babel src -d dist',
  dev : 'npm run build -- -w'
}
for(let key in scripts) {
  config.scripts[key] = scripts[key]
}
let _config = JSON.stringify(config, null, 2)

fs.writeFileSync(fileName, _config)
EOF
```
