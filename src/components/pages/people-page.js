import React, {useState} from "react";

import Row from "../row";
import { PeopleList, PeopleDetails } from "../sw-components";

const PeoplePage = () => {
    const [selectedItemId, setSelectedItemId] = useState(1)
    const leftElem = <PeopleList setSelectedItemId={setSelectedItemId} /> 
    const rightElem =  <PeopleDetails selectedItemId={selectedItemId} />
           
    
    return (
    <Row left={leftElem} right={rightElem}/>
    )
}

export default PeoplePage;