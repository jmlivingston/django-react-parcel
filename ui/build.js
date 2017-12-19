const argv = require('yargs').argv
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

rimraf.sync('./dist')
rimraf.sync('./.cache')

const buildMode = argv.watch ? 'watch' : 'build'
const parcelPath = path.join(__dirname, '/node_modules/.bin/parcel')
const cmd = parcelPath + ' ' + buildMode + ' bundler/bundler.html --public-url /ui/dist/'
const exec = require('child_process').exec
console.log('Watching ' + cmd)
let childProcess = exec(cmd)
childProcess.stdout.on('data', function(data) {
  // console.log('stdout: ' + data.toString())
})
childProcess.stderr.on('data', function(data) {
  console.log('stderr: ' + data.toString())
})
childProcess.on('exit', function(code) {
  console.log('Error Watching (Code: ' + code.toString() + ')')
})
