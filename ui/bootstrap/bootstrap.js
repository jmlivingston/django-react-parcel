// import('babel-polyfill')
// import React from 'react'
// import ReactDOM from 'react-dom'

// // const loadComponent = async () => {
// //   const dataset = document.getElementById('bootstrap').dataset
// //   const data = dataset.data || {}
// //   const json = JSON.parse(data.replace(/'/g, '"'))
// //   const path = dataset.path
// //   try {
// //     async switch (path) {
// //       case 'home':
// //         const { Home } = await import('./../src/containers/Home')
// //         ReactDOM.render(<Home {...json} />, document.getElementById('bootstrap'))
// //         break
// //       case 'contact-us':
// //         const { ContactUs } = await import('./../src/containers/ContactUs')
// //         ReactDOM.render(<ContactUs {...json} />, document.getElementById('bootstrap'))
// //         break
// //       case 'about':
// //         const { About } = await import('./../src/containers/About')
// //         ReactDOM.render(<About {...json} />, document.getElementById('bootstrap'))
// //         break
// //     }
// //   }
// //   catch(err) {
// //     // TODO: Handle failure
// //     console.log(err)
// //   }
// // }

// // loadComponent()

// const loadComponent = () => {
//   console.log('foo')

//   const dataset = document.getElementById('bootstrap').dataset
//   const data = dataset.data || '{}'
//   const json = JSON.parse(data.replace(/'/g, '"'))
//   const path = dataset.path

//   //       const { Home } = await import('./../src/containers/Home')
//   //       ReactDOM.render(<Home {...json} />, document.getElementById('bootstrap'))
//   //       break

//   const componentPath = ''
//   switch (path) {
//     case 'home':
//       const { Home } = await import('./../src/containers/Home')
//       ReactDOM.render(<Home {...json} />, document.getElementById('bootstrap'))
//       break
//     case 'contact-us':
//       const { ContactUs } = await import('./../src/containers/ContactUs')
//       ReactDOM.render(<ContactUs {...json} />, document.getElementById('bootstrap'))
//       break
//     case 'about':
//       const { About } = await import('./../src/containers/About')
//       ReactDOM.render(<About {...json} />, document.getElementById('bootstrap'))
//       break
//   }

//   if(componentPath !== '') {
//     import('./../src/containers/About').then((About) => {
//       // ReactDOM.render(<Home {...json} />, document.getElementById('bootstrap'))
//       const Component = About.default
//       ReactDOM.render(<Component />, document.getElementById('bootstrap'))
//     }).catch(err => {
//       console.log(err)
//     })
//   }

//   // const dataset = document.getElementById('bootstrap').dataset
//   // const data = dataset.data || {}
//   // const json = JSON.parse(data.replace(/'/g, '"'))
//   // const path = dataset.path
//   // try {
//   //   async switch (path) {
//   //     case 'home':
//   //       const { Home } = await import('./../src/containers/Home')
//   //       ReactDOM.render(<Home {...json} />, document.getElementById('bootstrap'))
//   //       break
//   //     case 'contact-us':
//   //       const { ContactUs } = await import('./../src/containers/ContactUs')
//   //       ReactDOM.render(<ContactUs {...json} />, document.getElementById('bootstrap'))
//   //       break
//   //     case 'about':
//   //       const { About } = await import('./../src/containers/About')
//   //       ReactDOM.render(<About {...json} />, document.getElementById('bootstrap'))
//   //       break
//   //   }
//   // }
//   // catch(err) {
//   //   // TODO: Handle failure
//   //   console.log(err)
//   // }
// }

// loadComponent()

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
