import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/Layout/NavBar/index';
import AirportHome from './components/Airports/Home';

import Simulacao from './components/Simulacao/Simular';
import PaginaInicial from './components/PaginaInicial';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />         
        <Switch>
          <Route path="/" exact  component={PaginaInicial}/>
          <Route path="/airports" component={AirportHome} />
          <Route path="/simular" component={Simulacao} />
        </Switch>
      </BrowserRouter>
    </>
  )
};

export default App;
