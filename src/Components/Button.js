import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Button extends Component {

  /* note -- change this and all other components to display things and don't have state to
  functional components as opposed to class components*/
    render() {
    return (
      <>
      <Link>{this.props.buttonFunc.buttonText}</Link>
      </>
    );
  }
}

export default Button;
