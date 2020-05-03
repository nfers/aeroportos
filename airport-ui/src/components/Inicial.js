import React from 'react';
import '../style.css';


import Forms from '../components/Form/index';

const Inicial = () => {
  return (
    <div className="container-md">
      <div className="content">
        <h1 class="display-4" id="init">Bem vindo ao <strong>Simulador de Voôs</strong></h1>
      </div> 

      <div className="text-center">
      <Forms />
      </div>
    </div>
  )
}

export default Inicial;