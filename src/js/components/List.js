import React from 'react';
import AddItem from './AddItem';
import ListItem from './ListItem';
import {Link} from 'react-router'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    const index = this.props.route.data.lists.findIndex((list) =>
      list.id == this.props.params.id);
    this.state = {
      listItems: this.props.route.data.lists[index].list,
      total: this.props.route.data.lists[index].total
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
  componentDidUpdate(prevProps) {
    this.props.route.saveList(this.props.params.id, this.state.total, this.state.listItems);
  }
  render() {
    const listItems = this.state.listItems.map((item) =>
      <ListItem key={item.id} 
                id={item.id} 
                text={item.text} 
                title={'Delete Item'}
                deleteItem={this.deleteItem.bind(this, item.id)}/>);
    return (
      <div className="list">
      <Link to="/lists">
        <button className="save-list">Return to Lists</button>
      </Link>
        <AddItem addItem={this.addItem}>Add Item...</AddItem>
        <ul className="list-content">
          {listItems}
        </ul>
      </div>
    )
  }
}