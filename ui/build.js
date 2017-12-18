const fs = require('fs')
const argv = require('yargs').argv
const rimraf = require('rimraf')

rimraf.sync('./dist')
rimraf.sync('./.cache')

fs.readdir('./bootstrap', (err, files) => {
  files.forEach(file => {
    if (file.indexOf('.html') !== -1) {
      const buildMode = argv.watch ? 'watch' : 'build'
      const cmd = './node_modules/.bin/parcel ' + buildMode + ' bootstrap/' + file + ' --public-url /ui/dist/'
      console.log('Watching ' + file)
      const exec = require('child_process').exec
      let childProcess = exec(cmd)
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
