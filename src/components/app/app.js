import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage } from '../pages';
import { Provider } from '../swapi-context';
import SwapiService from '../../services/swapi-service';

import './app.css';

const swapi = new SwapiService();

const App = () => {

  return (
    <div>
      <Provider value={swapi}>
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </Provider>
    </div>
  );
};

export default App;
