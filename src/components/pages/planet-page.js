import React from "react";
import { withRouter } from "react-router-dom";
import Row from "../row";
import { PlanetDetails, PlanetList } from "../sw-components";

const PlanetPage = ({selectedItemId, history}) => {
    const setSelectedItemId = (id) => history.push(id)
    const leftElem = <PlanetList setSelectedItemId={setSelectedItemId} /> 
    const rightElem =  <PlanetDetails selectedItemId={selectedItemId} />
           
    return (
    <Row left={leftElem} right={rightElem}/>
    )
}

export default withRouter(PlanetPage);