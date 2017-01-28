import React from 'react';
import AddItem from './AddItem';
import ListItem from './ListItem';

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: this.props.route.data[this.props.params.id].list,
      total: this.props.route.data[this.props.params.id].total
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
                title={'Delete Item'}
                deleteItem={this.deleteItem.bind(this, item.id)}/>);
    return (
      <div className="list">
      <button className="save-list">Save list</button>
        <AddItem addItem={this.addItem}/>
        <ul className="list-content">
          {listItems}
        </ul>
      </div>
    )
  }
}