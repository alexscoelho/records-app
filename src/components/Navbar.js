import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='nav'>
      <span className='logo' to='/'>
        Records App
      </span>
      <Link to='/'>Home</Link>
    </div>
  );
};
