import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import App from './components/App';


class AppRoute extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} />
      </Router>
    );
  }
}

ReactDOM.render(
  <AppRoute/>, 
  document.getElementById('app')
)
