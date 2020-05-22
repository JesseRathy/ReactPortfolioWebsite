import React,{Component} from 'react';
import PropTypes from 'prop-types';

/* note -- change this and all other components to display things and don't have state to
functional components as opposed to class components*/
class Headline extends Component {
  render() {

    /*{note that for styled components, you have to essentially put classname
    = this.props.className on the original component to be able to modify the
    component. } */
    return (
      <>
      <h1 className={this.props.className} key={this.props.textHeadline.id}> {this.props.textHeadline.value} </h1>
      </>
    );

  }
}

Headline.propTypes = {
  textHeadline: PropTypes.object.isRequired
}

export default Headline;
