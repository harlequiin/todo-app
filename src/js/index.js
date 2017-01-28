import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import App from './components/App';
import List from './components/List';
import Menu from './components/Menu'


class AppRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      lists:[
        {
          name: 'Groceries',
          id: 0,
          total: 3,
          list: [{
            id:0,
            text: 'Buy Bananas'
          },
          {
            id:1,
            text: 'Buy toiler paper'
          },
          {
            id:2,
            text: 'Buy milk'
          }
          ]
        }]
    }
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Menu}/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <AppRoute/>, 
  document.getElementById('app')
)
