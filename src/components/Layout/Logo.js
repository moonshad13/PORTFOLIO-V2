import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 24px;
  font-weight: 400;
  color: var(--highlight);
  
  a {
    color: var(--highlight);
    text-decoration: none;
    
    &:hover {
      color: var(--highlight);
    }
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <a href="#top">MS</a>
    </StyledLogo>
  );
};

export default Logo;