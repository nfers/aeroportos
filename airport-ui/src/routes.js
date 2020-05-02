import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import AirportHome from './components/Airports/Home';
import Main from './Pages/Main';
import Simulacao from './components/Simulacao/';
import NewAirports from './components/Airports/NewAirport';
import Airports from './Pages/Airports';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
       <Route path='/' exact component={Main} />
        <Route path='/airports' exact component={AirportHome} />          
        <Route path='/airports/new' exact component={NewAirports} />                       
          <Route path="/simular" component={Simulacao} />
          <Route path='/.*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>

  );
}