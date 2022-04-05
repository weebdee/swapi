import React from "react";
import { withRouter } from "react-router-dom";
import Row from "../row";
import { PeopleList, PeopleDetails } from "../sw-components";

const PeoplePage = ({selectedItemId, history}) => {
    const setSelectedItemId = (id) => history.push(id)
    const leftElem = <PeopleList setSelectedItemId={setSelectedItemId} /> 
    const rightElem =  <PeopleDetails selectedItemId={selectedItemId} />
    
    return (
    <Row left={leftElem} right={rightElem}/>
    )
}

export default withRouter(PeoplePage);