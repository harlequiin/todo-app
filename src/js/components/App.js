import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import {Link} from 'react-router'


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>ToDo list</h1>
        <Link to="/">
          <button className="save-list">Return to Lists</button>
        </Link>
        {this.props.children}
      </div>
    )
  }
}
