import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Paragraph from './TextDescription.js';
import Subheader from './Subheader.js';


/* note -- change this and all other components to display things and don't have state to
functional components as opposed to class components*/
class HeadedParagraph extends Component{
  render(){
    return(
      <>
      <div>
        <Subheader textSubheader={this.props.textSubheader} />
        <Paragraph paragraphText={this.props.paragraphText} />
      </div>
      </>
    );

  }
}

export default HeadedParagraph;
