import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  padding-top: 20px;
  background-color: transparent;
  z-index: 11;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--light-text);
  font-family: var(--font-mono);
  z-index: 12;
  padding: 0px 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 25px;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 40px; // Fixed height for alignment
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const StyledNavLink = styled(motion.a)`
  padding: 10px;
  text-decoration: none;
  color: var(--light-text);
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  height: 100%;
  
  &:hover {
    color: var(--highlight);
  }
`;

const LogoLink = styled.a`
  display: inline-block;
  color: var(--highlight);
  font-family: ${props => props.theme.fonts.mono};
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <LogoLink href="#" onClick={handleLogoClick}>
      MS
    </LogoLink>
  );
};

const Navigation = () => {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setScrollDirection(currentScroll > prevScroll ? 'down' : 'up');
      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navVariants = {
    hidden: { opacity: 0, x: 50 },
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

  return (
    <StyledHeader style={{ transform: scrollDirection === 'down' ? 'translateY(-100px)' : 'translateY(0)' }}>
      <StyledNav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>
        
        <StyledLinks>
          {['About', 'Experience', 'Work', 'Contact'].map((item, i) => (
            <StyledNavLink
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              {item}
            </StyledNavLink>
          ))}
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navigation;