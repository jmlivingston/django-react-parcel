import('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'

window.LoadReactComponent = rootId => {
  console.log(rootId)
  const dataset = document.getElementById(rootId).dataset
  const data = dataset.data || '{}'
  const json = JSON.parse(data.replace(/'/g, '"'))
  const path = dataset.path
  var componentPath = ''

  const handleComponent = comp => {
    const Component = comp.default
    ReactDOM.render(<Component {...json} />, document.getElementById(rootId))
  }

  const handleError = err => {
    // TODO: Integrate with logging
    console.log(err)
  }

  switch (path) {
    case 'home':
      import('./../src/containers/Home')
        .then(handleComponent)
        .catch(handleError)
      break
    case 'contact-us':
      import('./../src/containers/ContactUs')
        .then(handleComponent)
        .catch(handleError)
      break
    case 'about':
      import('./../src/containers/About')
        .then(handleComponent)
        .catch(handleError)
      break
  }
}
