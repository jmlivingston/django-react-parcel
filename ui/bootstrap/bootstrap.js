import('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'

const loadComponent = () => {
  const dataset = document.getElementById('bootstrap').dataset
  const data = dataset.data || '{}'
  const json = JSON.parse(data.replace(/'/g, '"'))
  const path = dataset.path
  var componentPath = ''
  switch (path) {
    case 'home':
      import('./../src/containers/Home')
        .then(Home => {
          const Component = Home.default
          ReactDOM.render(<Component {...json} />, document.getElementById('bootstrap'))
        })
        .catch(err => {
          console.log(err)
        })
      break
    case 'contact-us':
      import('./../src/containers/ContactUs')
        .then(ContactUs => {
          const Component = ContactUs.default
          ReactDOM.render(<Component {...json} />, document.getElementById('bootstrap'))
        })
        .catch(err => {
          console.log(err)
        })
      break
    case 'about':
      import('./../src/containers/About')
        .then(About => {
          const Component = About.default
          ReactDOM.render(<Component {...json} />, document.getElementById('bootstrap'))
        })
        .catch(err => {
          console.log(err)
        })
      break
  }
}

loadComponent()
