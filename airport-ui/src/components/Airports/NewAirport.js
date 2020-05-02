import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';

const NewAirport = () => {

  const [ newAirport, SetNewAirport] = useState('');
  
async function handleSubmit (e) {
  e.preventDefault();
  
  let values = [{
    name: "GYN - Aeroporto de Goiania",
    city: "Goiânia",
    country: "Brasil"

  }]

  handleSubmit = await api.post('airports', values).then(
    ({ data }) => {
      console.log(values);
      console.log(data);
      SetNewAirport(data);
    }
  )
}

  return (
    <div className="container">
      <button onClick={handleSubmit}> Vai</button>
      <form>
        {console.log(newAirport)}
      </form>
    </div>

  )
}

export default NewAirport;