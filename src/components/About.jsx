import React from 'react'

const About = ({toggle , setToggle, handleToggle}) => {
  return (
    <div className={`container mt-5 ${toggle ? "text-black" : "text-info"}`}>
      <h1>About</h1>
      <p className='fs-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Istety, labore at nihil architecto nostrum voluptate quasi, sequi animi temporibus tempora alias ipsam dignissimos. Fugit aut rem cum fuga omnis ullam.</p>
    </div>
  )
}

export default About