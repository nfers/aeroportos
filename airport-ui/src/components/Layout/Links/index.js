import React from 'react';
import { NavLink } from 'react-router-dom';

const LinksNav = () => {
  return (
    <ul className="right">
      <li><NavLink to='/'exact >Página Inicial</NavLink></li>      
      <li><NavLink to='/airports'>Aeroportos</NavLink></li>
      <li><NavLink to='/airports/new'>Cadatro de Aeroportos</NavLink></li>
      <li><NavLink to='/simular'>Simular</NavLink></li>
      
    </ul>
  )
}

export default LinksNav;