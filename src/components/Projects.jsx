import React from "react";

const Projects = ({ toggle, setToggle, handleToggle }) => {
  return (
    <div className={`container mt-5 ${toggle ? "text-black" : "text-info"}`}>
      <h1>Projects</h1>
      <ul className="fs-3">
        <li>Tic Tac Toe</li>
        <li>Palindrome Checker</li>
        <li>Temperature Converter</li>
        <li>Youtube Clone</li>
        <li>Amazon Clone</li>
      </ul>
    </div>
  );
};

export default Projects;
