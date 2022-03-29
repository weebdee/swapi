import React, {useState} from "react";

import Row from "../row";
import { StarshipDetails, StarshipList } from "../sw-components";

const StarshipPage = () => {
    const [selectedItemId, setSelectedItemId] = useState(2)
    const leftElem = <StarshipList setSelectedItemId={setSelectedItemId} /> 
    const rightElem =  <StarshipDetails selectedItemId={selectedItemId} />
           
    
    return (
    <Row left={leftElem} right={rightElem}/>
    )
}

export default StarshipPage;