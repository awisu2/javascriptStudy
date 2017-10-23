const aglio = require('aglio')
const fs = require('fs.extra')
const path = require('path')
const {promisify} = require('util')

const src = './src'
const output = './output'
const outputFile =  'app.html'

function removeAnyOutPut () {
  try {
    fs.rmrfSync(output)
  } catch (e) {
    return e
  }
  return null
}


function readFiles(callback) {
  // srcディレクトリから対象ファイル一覧を作成
  fs.readdir(src, (err, reads) => {
    if (err) {
      callback(err)
      return false
    }

    // .md 拡張子のファイルを取得
    let files = []
    reads.filter((read) => {
      let resolve = path.resolve(src, read)
      return fs.statSync(resolve).isFile() && /.\.md$/.test(read)
    }).forEach((file) => {
      let resolve = path.resolve(src, file)
      files.push(resolve)
    })

    // read files
    let fileReads = []
    files.forEach((file) => {
      let read = new Promise((resolve, reject) => {
        readFile(file, (err, data) => {
          if(err) {
            reject(err)
            return
          }
          data = data.replace(/FORMAT:.*/g , '')
          resolve(data)
        })
      })
      fileReads.push(read)
    })

    // exec read files
    Promise.all(fileReads)
    .then(datas => { callback(null, datas)})
    .catch(err => { callback(err)})
  })
}

function readFile (file, callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      callback(err)
      return
    }
    callback(null, data)
  })
}

function aglioRender(blueprint, callback) {
  let options = {
    themeVariables: 'default'
  }
  aglio.render(blueprint, options, (err, html, warnings) => {
    callback(err, {html: html, warnings: warnings})
  })
}

function writeFile(dirctory, file, data, callback) {
  try {
    fs.mkdirSync(dirctory)
  } catch(err) {
    callback(err)
    return
  }

  let fullPath = path.resolve(dirctory, file)
  fs.writeFile(fullPath, data, (err) => {
    if (err) {
      callback(err)
      return
    }
    callback()
  })
}


function main () {
  let err = removeAnyOutPut()
  if(err) {
    console.log(err)
    return
  }

  let _warnings = null
  promisify(readFiles)()
  .then(datas => {
    let blueprint = 'FORMAT: A1\n'
    datas.forEach(data => {
      blueprint += data
    })

    return promisify(aglioRender)(blueprint)
  })
  .then(({html, warnings}) => {
    _warnings = warnings
    return promisify(writeFile)(output, outputFile, html)
  })
  .then(data => {
    console.log('created')
    if(_warnings) {
      console.log('WARNINGS:')
      _warnings.forEach(warning => {
        console.log(warning)
      })
    }
  })
  .catch(err => {
    console.log(err)
  })
}

main()
