import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component{
  render() {
    const links = this.props.links;
    console.log(links);
    const createLinks = links.map((link) =>
     <Link to={link.location}> {link.value} </Link> );
    return (
      <>
      <div>
        {createLinks}
      </div>
      </>
    );
  }


}

export default NavBar
