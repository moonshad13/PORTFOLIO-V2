import React from 'react';
import styled from 'styled-components';
import CursorHighlight from '../UI/CursorHighlight';
import ScrollProgress from '../UI/ScrollProgress';

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(10, 25, 47, 1);
`;

const BackgroundContainer = ({ children }) => {
  return (
    <Container>
      <ScrollProgress />
      <CursorHighlight />
      {children}
    </Container>
  );
};

export default BackgroundContainer;