import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledAboutSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 0;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  &:hover {
    .wrapper {
      transform: translate(-4px, -4px);
    }
    
    .img {
      filter: none;
    }
    
    &:after {
      transform: translate(8px, 8px);
    }
  }

  .wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    position: relative;
    z-index: 1;
    background-color: var(--highlight);
    border-radius: 4px;
  }

  .img {
    position: relative;
    border-radius: 4px;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--highlight);
    top: 20px;
    left: 20px;
    z-index: 0;
    border-radius: 4px;
    transition: var(--transition);
  }
`;

const About = () => {
  return (
    <StyledAboutSection id="about">
      <h2>About Me</h2>
      <AboutGrid>
        <div>
          {/* Your about text content goes here */}
          <p>Your introduction text here...</p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StyledPic>
            <div className="wrapper">
              <img
                className="img"
                src="/path/to/your/profile-pic.jpg"
                alt="Profile"
                width="300"
                height="300"
              />
            </div>
          </StyledPic>
        </motion.div>
      </AboutGrid>
    </StyledAboutSection>
  );
};

export default About;