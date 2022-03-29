import React from "react"
import withSwapi from "../hoc";
import ItemDetails from "../item-details";

const StarshipDetails = withSwapi(
    (props) => <ItemDetails {...props} />,
    (swapi) => ({
        getData: swapi.getStarship,
        getImg: swapi.getStarshipImage
    })
)

const PeopleDetails = withSwapi(
    (props) => <ItemDetails {...props} />,
    (swapi) => ({
        getData: swapi.getPerson,
        getImg: swapi.getPersonImage
    })
)

const PlanetDetails = withSwapi(
    (props) => <ItemDetails {...props} />,
    (swapi) => ({
        getData: swapi.getPlanet,
        getImg: swapi.getPlanetImage
    })
)
export {PeopleDetails, StarshipDetails, PlanetDetails}