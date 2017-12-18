const argv = require('yargs').argv
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

rimraf.sync('./dist')
rimraf.sync('./.cache')

const parcelPath = path.join(__dirname, 'node_modules', '.bin', 'parcel')
const buildMode = argv.watch ? 'watch' : 'build'

fs.readdir('./bootstrap', (err, files) => {
  files.forEach(file => {
    if (file.indexOf('.html') !== -1) {
      const cmd = parcelPath + ' ' + buildMode + ' bootstrap/' + file + ' --public-url /ui/dist/'
      console.log('Watching ' + file)
      const exec = require('child_process').exec
      const childProcess = exec(cmd)
      childProcess.stdout.on('data', function(data) {
        // console.log('stdout: ' + data.toString())
      })
      childProcess.stderr.on('data', function(data) {
        console.log('stderr: ' + data.toString())
      })
      childProcess.on('exit', function(code) {
        console.log('Error Watching ' + file + ' (Code: ' + code.toString() + ')')
      })
    }
  })
})
