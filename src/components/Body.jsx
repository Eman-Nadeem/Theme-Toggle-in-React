import React, { useState } from 'react'
import Home from "./Home"
import About from './About'
import Projects from './Projects'

const Body = ({toggle , setToggle, handleToggle}) => {
  const [select, setSelect]= useState("Home")

  return (
    <>
      <div className='pb-5 container '>
        <div style={{height: "351px"}}>
            {select==="Home" && <Home toggle={toggle} setToggle={setToggle} handleToggle={handleToggle}/>}
            {select==="About" && <About toggle={toggle} setToggle={setToggle} handleToggle={handleToggle}/>}
            {select==="Projects" && <Projects toggle={toggle} setToggle={setToggle} handleToggle={handleToggle}/>}
        </div>
        <div className='mb-4 d-flex justify-content-center gap-2'>
          <button className={`${toggle ? "bg-light" : "bg-dark"} ${toggle ? "text-black" : "text-info"} fw-semibold rounded px-4 py-2 fs-4 border border-2 ${toggle ? "border-black" : "border-info"}`} onClick={()=>setSelect("Home")}>Home</button>
          <button className={`${toggle ? "bg-light" : "bg-dark"} ${toggle ? "text-black" : "text-info"} fw-semibold rounded px-4 py-2 fs-4 border border-2 ${toggle ? "border-black" : "border-info"}`} onClick={()=>setSelect("About")}>About</button>
          <button className={`${toggle ? "bg-light" : "bg-dark"} ${toggle ? "text-black" : "text-info"} fw-semibold rounded px-4 py-2 fs-4 border border-2 ${toggle ? "border-black" : "border-info"}`} onClick={()=>setSelect("Projects")}>Projects</button>
        </div>
      </div>
    </>
  )
}

export default Body