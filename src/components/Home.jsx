import React from 'react'

const Home = ({toggle , setToggle, handleToggle}) => {
  return (
    <div className={`container mt-5 ${toggle ? "text-black" : "text-info"}`}>
      <h2>Hello I'm,</h2>
      <h1>Eman Nadeem</h1>
      <h3>Web Developer From Pakistan</h3>
      <h4 className='w-50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien tellus, consequat Nam aliquam sagittis arcu.</h4>
    </div>
  )
}

export default Home