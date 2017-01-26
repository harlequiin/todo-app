import React from 'react';


export default (props) => {
  return ( 
        <div className="add-item">
          <input type="text" placeholder="Add Item..."/>
          <i className="add-item-icon" title="add item" onClick={props.addItem}>&#10133;</i>
        </div>
  );
}



