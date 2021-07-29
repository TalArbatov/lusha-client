import React from 'react';
import { StyledDescription, StyledInformation, StyledLikes } from '../styles';

const Description = ({
  description = '',
  likes
}) => {
  const shortDescription = description?.length > 30 ? description.substr(0, 30) + '...' : description;
  return (
    <StyledDescription>
        <div>
          <span>{ shortDescription }</span>
        </div>
        <StyledLikes>
        <img src="../../assets/like.svg" />
        <span>{ likes }</span>
        </StyledLikes>
    </StyledDescription>
  );
};

export default Description;
