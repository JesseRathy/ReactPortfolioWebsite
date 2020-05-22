import React,{Component} from 'react';

/* note -- change this and all other components to display things and don't have state to
functional components as opposed to class components*/
class TextDescription extends Component {
  render() {

    return (
      <>
        <p> {this.props.paragraphText.value} </p>
      </>

    );
  }
}

export default TextDescription;
