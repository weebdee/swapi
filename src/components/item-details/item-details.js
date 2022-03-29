import React, {useState, useEffect} from 'react';

import './item-details.css';

const ItemDetails = ({selectedItemId, getData, getImg}) => {
  const [state, setState] = useState({});
  const {id, name, gender, birthYear, eyeColor} = state;
  
  
  useEffect(() => {
    const updateItem = () => {
      getData(selectedItemId).then(data => {
        setState(data)
      })
      
    }
    
    updateItem()
  }, [selectedItemId])

  const imgUrl = getImg(id)

  return (
    <div className="person-details card">
      <img className="person-image"
        src={imgUrl} 
        />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ItemDetails