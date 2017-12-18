import('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../src/containers/Home'

const json = JSON.parse(document.getElementById('home-container').dataset.home.replace(/'/g, '"'))
ReactDOM.render(<Home {...json} />, document.getElementById('home'))
