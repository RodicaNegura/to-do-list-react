import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/"> HOME </Link>
      <Link to="/menu"> MENU </Link>
      <Link to="/contacts"> CONTACTS </Link>
    </div>
  )
}

export default Navbar; 