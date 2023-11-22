import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/"> HOME </Link>
      <Link to="/profile"> PROFILE </Link>
      <Link to="/contact"> CONTACT </Link>
    </div>
  )
}

export default Navbar; 
