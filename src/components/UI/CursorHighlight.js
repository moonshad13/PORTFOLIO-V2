import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CursorLight = styled.div`
  position: fixed;
  width: 400px;  // Increased from 300px
  height: 400px; // Increased from 300px
  background: radial-gradient(circle, rgba(100, 255, 218, 0.08) 0%, rgba(100, 255, 218, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: opacity 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
`;

const CursorHighlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <CursorLight 
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      isVisible={isVisible}
    />
  );
};

export default CursorHighlight;