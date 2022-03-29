import React from "react";
import ItemList from '../item-list';
import withSwapi from "../hoc";

const StarshipList = withSwapi(
    (props) => <ItemList {...props} />,
    (swapi) => ({getData: swapi.getAllStarships})
)

const PeopleList = withSwapi(
    (props) => <ItemList {...props} />,
    (swapi) => ({getData: swapi.getAllPeople})
)

const PlanetList = withSwapi(
    (props) => <ItemList {...props} />,
    (swapi) => ({getData: swapi.getAllPlanets})
)

export {PeopleList, PlanetList, StarshipList}
