import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
         <img src="https://th.bing.com/th/id/OIP.xdSxM9BIOJJ1qN5Q9hJtagHaHa?w=176&h=180&c=7&r=0&o=7&pid=1.7&rm=3" height="90px" width="90px" alt="" />
        </div>
        <div className="right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/addstudent" className="nav-link">Add</Link>
        <Link to="/viewstudent" className="nav-link">View</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar