import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  position: fixed;
  right: 40px;  // Changed back to original position
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 250px;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const ProgressTrack = styled.div`
  width: 2px;
  height: 100%;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: var(--highlight);
  height: ${props => props.progress}%;
  transition: height 0.2s ease-out;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
`;

const ProgressIndicator = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--highlight);
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${props => props.progress}%;
  transition: bottom 0.2s ease-out;
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.5);
`;

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', calculateScrollProgress);
    window.addEventListener('resize', calculateScrollProgress);

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  return (
    <ProgressContainer>
      <ProgressTrack>
        <ProgressBar progress={progress} />
        <ProgressIndicator progress={progress} />
      </ProgressTrack>
    </ProgressContainer>
  );
};

export default ScrollProgress;