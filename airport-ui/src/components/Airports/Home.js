import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';


const AirportHome = () => {
  const [airports, setAirports] = useState({ data: [] });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.get('/airports')
    setAirports(res)
  };

  return (

    <div className="container-fluid">
      <h1>Aeroportos em Operação</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {airports.data.map((names, index) => (
            <li key={index}>{names.name} </li>))}

        </ul>
        <button>Listar Aeroportos</button>
      </form>
      <button><Link to='/'>Voltar</Link></button>
    </div>
  )
}

export default AirportHome;