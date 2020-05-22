import React,{Component} from 'react';

/* note -- change this and all other components to display things and don't have state to
functional components as opposed to class components*/
class Subheader extends Component {
  render() {

    return (
      <>
      <h3 key={this.props.textSubheader.id}> {this.props.textSubheader.value} </h3>
      </>
    );
  }
}
export default Subheader;
