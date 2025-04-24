import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: var(--navy);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.mono};
  color: var(--highlight);
  font-size: 42px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    border: 2px solid var(--highlight);
    border-radius: 50%;
    border-top-color: transparent;
    animation: ${rotate} 1s linear infinite;
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <LogoWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        exit={{ opacity: 0 }}
      >
        MS
      </LogoWrapper>
    </StyledLoader>
  );
};

export default Loader;