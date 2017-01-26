import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>ToDo list</h1>
        <button className="save-list">Save list</button>
        <List/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
