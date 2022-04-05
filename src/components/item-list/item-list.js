import React, { useState, useEffect } from 'react';

import './item-list.css';

const ItemList = ({setSelectedItemId, getData}) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setState(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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