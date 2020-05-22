import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline.js';

/*const HeadlineModifier = ({className) => {
  return <Headline className={className}  />
}*/

const MainPageHeadline = styled(Headline)`
  color: tomato;
  font-family: 'Karla','Ariel';
  text-transform: uppercase;
`

export default MainPageHeadline
