import React from 'react';

export default (props) => {
  return (
    <li className="list-item">
      <div className="list-item-content">
        <p className="list-item-text">{props.text}</p>
        <i onClick={props.deleteItem} className="delete-item-icon" >&#10006;</i>
      </div>
    </li>
  );
}