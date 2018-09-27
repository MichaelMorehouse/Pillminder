import React from 'react'
import Navbar from './Navbar'

export default ({ children }) => {
  return (
    <div className="App">
        <Navbar />
        <div className="AppChild">
          {children}
        </div>
    </div>
  )
}
