import React,{Component} from 'react';
import PropTypes from 'prop-types';

/* note -- change this and all other components to display things and don't have state to
functional components as opposed to class components*/
class Image extends Component {
  render() {

    return (
      <>
      <img key={this.props.imageShown.id} alt={this.props.imageShown.alttext} src={this.props.imageShown.imageURL}/>
      </>
    );

  }
}

Image.propTypes = {
  imageShown: PropTypes.object.isRequired
}

export default Image;
