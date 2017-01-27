import React from 'react'

export default class Menu extends React.Component {
  render() {
    return (
      <div className="list">
      <button className="save-list">Choose list</button>
        <ul className="list-content">
          <li className="list-item">
            <div className="list-item-content">
              <p className="list-item-text">Yo, wassup</p>
              <i className="delete-item-icon" title="delete item">&#10006;</i>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-content">
              <p className="list-item-text">Yo, wassup</p>
              <i className="delete-item-icon" title="delete item">&#10006;</i>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-content">
              <p className="list-item-text">Yo, wassup</p>
              <i className="delete-item-icon" title="delete item">&#10006;</i>
            </div>
          </li>
        </ul>
      </div>
      
    );
  }
}