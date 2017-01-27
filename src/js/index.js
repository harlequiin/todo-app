import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import App from './components/App';
import List from './components/List';


class AppRoute extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={List}/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <AppRoute/>, 
  document.getElementById('app')
)
