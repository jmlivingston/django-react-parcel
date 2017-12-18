const argv = require('yargs').argv
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

rimraf.sync('./dist')
rimraf.sync('./.cache')

const buildMode = argv.watch ? 'watch' : 'build'
const cmd = './node_modules/.bin/parcel ' + buildMode + ' bootstrap/bootstrap.html --public-url /ui/dist/'
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
