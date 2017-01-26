import React from 'react';
import AddItem from './AddItem';
import ListItem from './ListItem';

export default class List extends React.Component {
  constructor() {
    super()
    this.state = {
      listItems:[
        {id:1, text:'Something to do'}
      ]
    }

  }
  render() {
    return (
      <div className="list">
        <AddItem/>
        <ul className="list-content">
          <ListItem text="Something to do"/>
        </ul>
      </div>
    )
  }
}