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
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e){
    this.setState({
      listItems: this.state.listItems.concat([{id: this.state.total+1, text: e.target.previousSibling.value}]),
      total: this.state.total + 1
    })
    e.target.previousSibling.value = '';
  }
  deleteItem(id){
    this.setState((prevState)=>(
      {listItems: prevState.listItems.filter((item)=>
        item.id !== id)}
    ))
  }
  render() {
    const listItems = this.state.listItems.map((item) =>
      <ListItem key={item.id} 
                id={item.id} 
                text={item.text} 
                deleteItem={this.deleteItem.bind(this, item.id)}/>);
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