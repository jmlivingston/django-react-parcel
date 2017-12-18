import React from 'react'
import { Button } from 'react-bootstrap'

const Home = ({ greeting }) => {
  return (
    <div>
      <h1>Home (React)</h1>
      <Button bsStyle="primary">{greeting}</Button>
    </div>
  )
}

export default Home
