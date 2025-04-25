import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

const StyledHeroSection = styled.section`
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 0 0; // Removed horizontal padding
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 100px 0 0;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 100px 0 0;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 100px;
  width: 100%;
  align-items: center;
  padding-left: 0; // Removed the left padding
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0; // Ensure no padding on the text content
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  margin: auto;

  .wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    z-index: 1;
    background-color: var(--highlight);
    border-radius: 4px;
    transform: translate(0, 0);
  }

  .img {
    position: relative;
    border-radius: 4px;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    max-width: 100%;
    display: block;
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
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translate(0, 0);
  }

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
`;

const StyledGreeting = styled.h1`
  color: var(--highlight);
  margin: 0 0 20px 4px;
  font-size: clamp(14px, 5vw, 16px);
  font-weight: 400;
  font-family: ${props => props.theme.fonts.mono};
`;

const StyledName = styled.h2`
  font-size: clamp(32px, 6vw, 60px); /* Reduced font size */
  font-weight: 600;
  line-height: 1.1;
  margin: 0;
`;

const StyledSubtitle = styled.h3`
  font-size: clamp(32px, 6vw, 60px); /* Reduced font size */
  line-height: 0.9;
  color: var(--text);
`;

const StyledDescription = styled.p`
  margin: 20px 0 0;
  max-width: 540px;
  color: var(--text);
  font-size: clamp(14px, 4vw, 18px); /* Reduced font size */
`;

const Hero = () => {
  return (
    <StyledHeroSection id="about">
      <ContentWrapper>
        <TextContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StyledGreeting>Hi, my name is</StyledGreeting>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StyledName>{personalInfo.name}.</StyledName>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StyledSubtitle>I build things for the web.</StyledSubtitle>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StyledDescription>
              I'm a {personalInfo.role} specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </StyledDescription>
          </motion.div>
        </TextContent>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <StyledPic>
            <div className="wrapper">
              <img
                className="img"
                src={process.env.PUBLIC_URL + '/moonshad.jpg'}
                alt="Profile"
              />
            </div>
          </StyledPic>
        </motion.div>
      </ContentWrapper>
    </StyledHeroSection>
  );
};

export default Hero;