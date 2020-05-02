import React from 'react';
import { Link } from 'react-router-dom';
import LinksNav from '../Links/index';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <LinksNav />
      </div>
    </nav>
  )
}

export default Navbar;