import React, { Component, useState, useEffect, useLayoutEffect  } from 'react';
import SwapiService from '../../services/swapi-service';

import './item-list.css';

const ItemList = () => {
  const [state, setState] = useState([]);
  const {data} = state;

  const swapi = new SwapiService();

  useEffect(() => {
    swapi.getAllPeople().then((data) => {
      setState(data)
      console.log(data);
    })
  }, [])



  const content = state.map(item => {
    return (
      <li id={item.id} className="list-group-item">
        {item.name}
      </li>
    )
  })

  return (
    <ul className="item-list list-group">
      {content}
    </ul>
    
  );
  
}

export default ItemList