import React from 'react';
import { NavLink } from 'react-router-dom';

const LinksNav = () => {
  return (
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav mr-auto">
      <li className="nav-item"><NavLink to='/'exact ><a class="nav-link"><span class="sr-only">(current)</span>PáginaInicial</a></NavLink></li>      
      <li className="nav-item"><NavLink to='/airports'><a class="nav-link">Aeroportos</a> </NavLink></li>      
      <li className="nav-item"><NavLink to='/new'><a class="nav-link">Cadatro de Aeroportos</a></NavLink></li>      
      <li className="nav-item"><NavLink to='/simular'><a class="nav-link">Realizar Simulação de Vôos</a></NavLink></li>      
    </ul>
    </div>
  )
}

export default LinksNav;