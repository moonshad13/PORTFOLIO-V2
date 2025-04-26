import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const StyledProjectsSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 0;
`;

const ProjectGrid = styled.div`
  position: relative;
  margin-top: 50px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectCard = styled(motion.div)`
  position: absolute;
  background-color: rgba(17, 34, 64, 0.95);
  padding: 2rem 1.75rem;
  border-radius: 8px;
  width: 600px; // Increased from 400px to 600px
  height: 400px;
  transition: all 0.3s ease;
  border: 1px solid var(--light-navy);
  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 35px -15px rgba(2, 12, 27, 0.8);
    border-color: var(--highlight);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 35px;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 10px;
  color: var(--lightest-text);
  font-size: 22px;
`;

const ExternalLinkIcon = styled.a`
  color: var(--light-text);
  font-size: 20px;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--highlight);
  }

  &::after {
    content: '↗';
  }
`;

const ProjectDescription = styled.div`
  color: var(--light-text);
  font-size: 16px;
  line-height: 1.6;
`;

const ProjectLink = styled.a`
  color: var(--highlight);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 14px;
  margin-top: 10px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const NavigationIndicator = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--highlight);
  font-size: 24px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  &.left {
    left: -15px;  // Changed from -25px to be much closer to the card
  }

  &.right {
    right: -15px;  // Changed from -25px to be much closer to the card
  }
`;

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      title: 'Fullstack E-Commerce Platform',
      description: [
        'Built a comprehensive e-commerce solution with user authentication, product management, and secure checkout.',
        'Implemented real-time shopping cart and admin dashboard functionality.'
      ],
      subtitle: 'Full-Stack Web Application',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Docker', 'Redux', 'JWT', 'Stripe API']
    },
    {
      title: 'Bluebonnet LLC',
      description: [
        'Developed a responsive front-end for a driving school website with modern design.',
        'Implemented streamlined booking system for increased client engagement.'
      ],
      link: 'https://bluebonnetds.com',
      subtitle: 'Driving School Website, USA',
      techStack: ['React.js', 'Next.js', 'Styled Components', 'Node.js', 'Express']
    },
    {
      title: 'Taxcom Accounting Services',
      description: [
        'Built the front-end for an accounting firm\'s platform with modern UI/UX.',
        'Integrated financial tools and optimized performance for smooth interaction.'
      ],
      link: 'https://taxcomaccountingservices.com',
      subtitle: 'Accounting Firm Website, UK',
      techStack: ['React.js', 'Material-UI', 'Firebase', 'Chart.js']
    },
    {
      title: 'PaperFlow',
      description: [
        'Created a web-based tool for real-time research collaboration.',
        'Implemented web scraping for research paper retrieval and annotation.'
      ],
      subtitle: 'Collaborative Research Paper Assistant',
      techStack: ['React.js', 'Python', 'BeautifulSoup', 'MongoDB', 'WebSocket']
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1]
      }
    })
  };

  const handleNavigation = (dir) => {
    if (dir === 'left') {
      setDirection(-1);
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    } else if (dir === 'right') {
      setDirection(1);
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }
  };

  

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      rotateY: direction > 0 ? 45 : -45,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      rotateY: direction < 0 ? 45 : -45,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <StyledProjectsSection id="work">
      <h2>Some Things I've Built</h2>
      <ProjectGrid>
        <NavigationIndicator 
          className="left" 
          onClick={() => handleNavigation('left')}
        >
          ←
        </NavigationIndicator>
        <AnimatePresence initial={false} custom={direction}>
          <ProjectCard
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <ProjectHeader>
              <div>
                <ProjectTitle>{projects[currentIndex].title}</ProjectTitle>
                <div style={{ color: 'var(--light-text)', fontSize: '14px', marginBottom: '15px' }}>
                  {projects[currentIndex].subtitle}
                </div>
              </div>
              {projects[currentIndex].link && (
                <ExternalLinkIcon 
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Website"
                />
              )}
            </ProjectHeader>
            <ProjectDescription>
              {projects[currentIndex].description.map((desc, i) => (
                <p key={i} style={{ marginBottom: '10px' }}>{desc}</p>
              ))}
              {projects[currentIndex].techStack && (
                <div style={{ 
                  marginTop: '20px', 
                  color: 'var(--highlight)', 
                  fontSize: '13px',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  {projects[currentIndex].techStack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              )}
            </ProjectDescription>
          </ProjectCard>
        </AnimatePresence>
        <NavigationIndicator 
          className="right" 
          onClick={() => handleNavigation('right')}
        >
          →
        </NavigationIndicator>
      </ProjectGrid>
    </StyledProjectsSection>
  );
};

export default Projects;