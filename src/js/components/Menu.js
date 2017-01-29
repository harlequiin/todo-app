import React from 'react'
import {Link} from 'react-router';
import ListItem from './ListItem';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: this.props.route.data.lists
    }
  }
  deleteItem(id) {
    this.setState((prevState)=>(
      {lists: prevState.lists.filter((list) => 
        list.id != id)}
    ))
  }
  componentDidUpdate() {
    console.log('Menu update');
    this.props.route.deleteList(this.state.lists);
  }
  render() {
    console.log("rendering")
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
      </div>
    );
  }
}