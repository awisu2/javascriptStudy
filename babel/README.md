babel study

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

editing js_modan directory.
auto compile to js direcory.

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
