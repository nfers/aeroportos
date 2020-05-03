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
    <>
      <div className="container">
        <h1>Aeroportos em Operação</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="container-fluid">
            <button className="btn btn-dark">Listar Aeroportos</button>
            <button className="btn btn-dark"><Link to='/'>Voltar</Link></button>
          </div>
          <div className="list-group">
            <ul className="list-group">
              {airports.data.map((names, index) => (
                <li className="list-group-item" key={index}>{names.name} </li>))}
            </ul>
          </div>
        </form>
        
      </div>
    </>
  )
}

export default AirportHome;