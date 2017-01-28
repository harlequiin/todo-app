import React from 'react'
import ListItem from './ListItem';

export default class Menu extends React.Component {
  render() {
    const data = this.props.route.data;
    const listItems = data.map((list) => 
      <ListItem text={list.name}
                key={list.id}
                id={list.id}
                total={list.total}
                title={'Delete List'}/>)
    return (
      <div className="list">
      <button className="save-list">Choose a list</button>
        <ul className="list-content">
          {listItems}
        </ul>
      </div>
    );
  }
}