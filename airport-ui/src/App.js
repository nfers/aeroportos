import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/Layout/NavBar/index';
import AirportHome from './components/Airports/Home';

import Create from './components/Airports/Create';
import Simulacao from './components/Simulacao';
import Inicial from './components/Inicial';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Inicial} />
          <Route path="/airports" component={AirportHome} />
          <Route path="/simular" component={Simulacao} />
          <Route path="/new" component={Create} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
