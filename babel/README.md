babel study

- http://es6-features.org

## usage

### 1. install

```
npm i -g babel-cli
npm i -D babel-preset-es2015
```

### 2. auto compile

```
cd <directory>
bable -w js_modan -d js
```

### 3. develop

editing js_modan directory.<br>
auto compile to js direcory.

## usage if you want import

bable is not suport imort front, so use browserify.<br>
this sample compile automaticaly.<br>
with npm packages path, fs-extra, babelify, vinyl-source-stream.<br>

### 1. insall

```
npm i -D gulp path fs-extra browserify babelify vinly-sourcestream
```

### 2. easy use

only need file use require command.<br>
[take care] browserify is not covert ms6.<br>
after convert bable convert.<br>

```
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

```
babel js_modan -d js
```

#### auto compile

```
bable -w js_modan -d js
```
