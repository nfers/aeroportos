import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [ airports, setAirports ] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "http://127.0.0.1:3030/airports"
      );
      const json = await res.json();

      setAirports(json);
    }
  })


  handleSubmit(() )

  return (
    <div className="content">
      
      <form>
        <label>Nome do Aeroporto</label>
        <input type="text" placeholder="informe o nome do aeroporto"/>
        <label>Cidade</label>
        <input type="text" placeholder="informe o nome da cidade"/>
        <label>Estado</label>
        <input type="text" placeholder="informe o nome do estado"/>
      </form>
      

    </div>
  );
}

export default App;
