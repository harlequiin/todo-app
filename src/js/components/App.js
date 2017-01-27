import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>ToDo list</h1>
        <button className="save-list">Save list</button>
        {this.props.children}
      </div>
    )
  }
}
