import React, { useState } from 'react'
import Navbar from './components/Navbar'


const App = () => {
  const [toggle, setToggle] =useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className={`${toggle ? "bg-light" : "bg-dark"} pt-3`}>
        <Navbar toggle={toggle} setToggle={setToggle} handleToggle={handleToggle}/>
      </div>
    </>
  )
}

export default App