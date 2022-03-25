import React, { Component, useState, useEffect, useLayoutEffect  } from 'react';

import './item-list.css';

const ItemList = ({setSelectedItemId, swapi}) => {
  const [state, setState] = useState([]);
  const {data} = state;

  useEffect(() => {
    swapi.getAllPeople().then((data) => {
      setState(data)
    })
  }, [])



  const content = state.map(item => {
    return (
      <li key={item.id} onClick={() => setSelectedItemId(item.id)} className="list-group-item">
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