import React from 'react';
import { NavLink } from 'react-router-dom';

const LinksNav = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to='/' exact >
            <span className="sr-only">(current)</span>Página Inicial
          </NavLink></li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/simular'>
            <span>Realizar Simulação</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default LinksNav;