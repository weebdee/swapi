import React, {useState} from "react";

import Row from "../row";
import { PlanetDetails, PlanetList } from "../sw-components";

const PlanetPage = () => {
    const [selectedItemId, setSelectedItemId] = useState(2)
    const leftElem = <PlanetList setSelectedItemId={setSelectedItemId} /> 
    const rightElem =  <PlanetDetails selectedItemId={selectedItemId} />
           
    
    return (
    <Row left={leftElem} right={rightElem}/>
    )
}

export default PlanetPage;