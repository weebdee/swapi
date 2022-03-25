import React, {useEffect, useState} from "react";

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from "../row";
import { Consumer } from "../swapi-context";


const PeoplePage = () => {
    const [selectedItemId, setSelectedItemId] = useState(1)


    const leftElem = (
        <Consumer>
            {(swapi) => {
                return <ItemList swapi={swapi} setSelectedItemId={setSelectedItemId} />
            }}
            
        </Consumer>
    )
    const rightElem = (
        <Consumer>
            {(swapi) => {
                return <PersonDetails swapi={swapi} selectedItemId={selectedItemId}/>
            }}
            
        </Consumer>
    )
    
    return (
    <Row left={leftElem} right={rightElem}/>
    )
}

export default PeoplePage;