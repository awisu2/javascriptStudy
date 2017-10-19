# node-config study

## install

```
npm init
npm i -S node-config
```

## files

**index.js**

```javascript
let config = require('config')
console.log(config)
```

**/config/default.json**

```json
{
  "file": "default",
  "default": "hello"
}
```

**/config/dev.json**

```json
{
  "file": "dev",
  "dev": "hello"
}
```

**/config/foo.json**

```json
{
  "filse": "foo",
  "foo": "hello"
}
```


## exec

```
node index.js
#Config { file: 'default', default: 'hello' }
NODE_ENV=dev node index.js
#Config { file: 'dev', default: 'hello', dev: 'hello' }
NODE_ENV=foo node index.js
#Config { file: 'foo', default: 'hello', foo: 'hello' }
```
