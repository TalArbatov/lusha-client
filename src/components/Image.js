import React from 'react';
import { StyledImage } from '../styles';
import Description from './Description';
const Image = ({
  src,
  likes,
  description
}) => {
  return (
    <StyledImage>
      <img src={ src } />
      <Description description={ description } likes={ likes }/>
    </StyledImage>
  );
};



export default Image;