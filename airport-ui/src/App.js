import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/Layout/NavBar/index';
import AirportHome from './components/Airports/Home';

import NewAirport from './components/Airports/NewAirport';
import Simulacao from './components/Simulacao';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact />
            <Route path="/airports" component={AirportHome} />
            <Route path="/simular" component={Simulacao} />
            <Route path="/new" component={NewAirport} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )

}

export default App;
