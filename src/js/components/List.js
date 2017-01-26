import React from 'react';
import AddItem from './AddItem';
import ListItem from './ListItem';

export default class List extends React.Component {
  constructor() {
    super()
    this.state = {
      listItems:[
        {id:1, text:'Something to do'}
      ],
      total: 1
    }
    this.addItem = this.addItem.bind(this);
  }
  addItem(e){
    this.setState({
      listItems: this.state.listItems.concat([{id: this.state.total+1, text: e.target.previousSibling.value}]),
      total: this.state.total + 1
    })
    console.log(e.target.previousSibling.value);
  }
  render() {
    const listItems = this.state.listItems.map((item) =>
      <ListItem key={item.id} text={item.text}/>);
    return (
      <div className="list">
        <AddItem addItem={this.addItem}/>
        <ul className="list-content">
          {listItems}
        </ul>
      </div>
    )
  }
}