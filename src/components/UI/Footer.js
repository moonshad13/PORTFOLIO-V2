import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledCredit = styled.div`
  color: var(--slate);
  font-family: ${props => props.theme.fonts.mono};
  font-size: 12px;
  line-height: 1;

  a {
    color: var(--highlight);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCredit>
        <div>Built by Moonshad Shahid</div>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;