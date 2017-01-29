import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, Link, hashHistory} from 'react-router';
import App from './components/App';
import List from './components/List';
import Menu from './components/Menu'

let Store = {
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
      }]
    },
    {
      name: 'Chores',
      id: 1,
      total: 4,
      list: [{
        id:0,
        text: 'Clean the bedroom'
      },
      {
        id:1,
        text: 'Mow the lawn'
      },
      {
        id:2,
        text: 'Fix the sink'
      },
      {
        id:4,
        text: 'Fix washing machine'
      }]
    }],
    saveList(id, total, list) {
      const index = this.lists.findIndex((list) =>
        list.id == id);
      this.lists[index].list = list;
    },
    deleteList(newlists) {
      this.lists = newlists.slice();
      console.log(Store.lists);
    }
};
let i = 0;
class AppRoute extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/lists"/>
          <Route path="/lists"data={Store} 
                      index={i++}
                      component={Menu}
                      deleteList={Store.deleteList.bind(Store)}/>
          <Route path="/lists/:id" 
                 data={Store.lists} 
                 component={List}
                 saveList={Store.saveList.bind(Store)}/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <AppRoute/>, 
  document.getElementById('app')
)
