import React, {useState, useEffect} from 'react';

import './item-details.css';

const Record = ({data, label, fieldName}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{data[fieldName]}</span>
    </li>
  )
}

const ItemDetails = ({selectedItemId, getData, getImg, children}) => {
  const [state, setState] = useState({});
  
  useEffect(() => {
    const updateItem = () => {
      getData(selectedItemId).then(data => {
        setState(data)
      })
      
    }
    updateItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItemId])

  const imgUrl = getImg(state.id)

  return (
    <div className="person-details card">
      <img className="person-image"
        src={imgUrl} alt='img'
      />

      <div className="card-body">
        <h4>{state.name}</h4>
        <ul className="list-group list-group-flush">
          {
          React.Children.map(children, (record) => {
              return React.cloneElement(
                record, 
                {data: state}
              )
            })
          }
            
        
        </ul>
      </div>
    </div>
  )
}

export {ItemDetails, Record}