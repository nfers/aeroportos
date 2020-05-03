import React from 'react';
import { Link } from 'react-router-dom';
import LinksNav from '../Links/index';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <LinksNav />
      
    </nav>
  )
}

export default Navbar;