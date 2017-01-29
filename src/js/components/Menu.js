import React from 'react';
import {Link} from 'react-router';
import AddItem from './AddItem';
import ListItem from './ListItem';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: this.props.route.data.lists,
      last: this.props.route.data.last
    }
    this.addItem = this.addItem.bind(this);
  }
  deleteItem(id) {
    this.setState((prevState)=>(
      {lists: prevState.lists.filter((list) => 
        list.id != id)}
    ))
  }
  addItem(e) {
    this.setState({
      lists: this.state.lists.concat([{
        name: e.target.previousSibling.value,
        id: this.state.last + 1, 
        total: 0,
        list:[]
      }]),
      last: this.state.last + 1
    })
    e.target.previousSibling.value = '';
  }
  componentDidUpdate() {
    this.props.route.saveState(this.state.lists, this.state.last);
  }
  render() {
    const lists = this.state.lists;
    const listItems = lists.map((list) => 
      <ListItem text={<Link to={"/lists/"+list.id}>{list.name}</Link>}
                key={list.id}
                id={list.id}
                total={list.total}
                title={'Delete List'}
                deleteItem={this.deleteItem.bind(this, list.id)}/>)
    return (
      <div className="list">
      <button className="save-list">Choose a list</button>
        <ul className="list-content">
          {listItems}
        </ul>
      <AddItem addItem={this.addItem}>Add List...</AddItem>
      </div>
    );
  }
}