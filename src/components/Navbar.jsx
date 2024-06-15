import React, { useState } from "react";
import { FiBox } from "react-icons/fi";
import { MdSunny } from "react-icons/md"
import { MdDarkMode } from "react-icons/md";
import Body from "./Body"

const Navbar = ({toggle , setToggle, handleToggle}) => {
  
  return (
  <>
    <div className={`container d-flex justify-content-between align-items-center border border-2 ${toggle ? "border-black" : "border-info"} rounded-1 ${toggle ? "bg-light" : "bg-dark"}`}>

      <div className="d-flex align-items-center gap-1">
        <FiBox size={60} className={`${toggle ? "text-black" : "text-info"}`}/>
        <p className={`fw-bold fs-2 mt-2 ${toggle ? "text-black" : "text-info"}`}>PantherX</p>
      </div>
      <div>
        {toggle ? (<MdDarkMode size={30} onClick={handleToggle} role="button"/>) : (<MdSunny size={30} onClick={handleToggle} role="button" className="text-info"/>) }
      </div>
    </div>
    <Body toggle={toggle} setToggle={setToggle} handleToggle={handleToggle}/>
  </>
  )
};

export default Navbar;
