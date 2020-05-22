import React,{Component} from 'react';
import ListItem from './ListItem.js';


class ItemList extends Component {

  render() {
    const items = this.props.items;
    const listItems = items.map((item,key) =>

    {
      console.log(item.value);
      console.log(item.id);
      /*{since we're using the listitem itself, we have to pass the whole item,
      as listItem needs the whole item to do its job.}*/
      return (<ListItem key={item.id} item={item}/>) });

    return(
      <>
      <ul>
        {listItems}
      </ul>
      </>
    );



  }
}



export default ItemList;
