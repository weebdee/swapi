import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage} from '../pages';
import { Provider } from '../swapi-context';
import SwapiService from '../../services/swapi-service';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './app.css';

const swapi = new SwapiService();

const App = () => {

  return (
    <div>
      <Provider value={swapi}>
        <Router>
          <Header />
          <RandomPlanet />
          <Route path='/' exact={true} render={() => <h1>Hello World</h1>} />
          <Route path='/people/:id?' render={({match}) => {
            const selectedItemId = match.params.id ? match.params.id : 1;

            return <PeoplePage selectedItemId={selectedItemId}/>
          }} />
          <Route path='/starships/' component={StarshipPage} />
          <Route path='/planets/:id?' render={({match}) => {
            const selectedItemId = match.params.id ? match.params.id : 2;

            return <PlanetPage selectedItemId={selectedItemId}/>
          }} /> 
        </Router>
      </Provider>
    </div>
  );
};

export default App;
