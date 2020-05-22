import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList.js';
import Subheader from './Subheader.js';


/* note -- change this and all other components to display things and don't have state to
functional components as opposed to class components*/
class HeadedList extends Component{
  render(){
    return(
      <>
      <div>
        <Subheader textSubheader={this.props.textSubheader} />
        <ItemList items={this.props.items} />
      </div>
      </>
    );

  }
}


export default HeadedList;
