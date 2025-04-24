import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 100px 0;
`;

const Title = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
  color: var(--highlight);
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  color: var(--slate);
  margin-bottom: 30px;
`;

const Description = styled.p`
  color: var(--slate);
  margin-bottom: 50px;
`;

const ContactButton = styled.a`
  background-color: transparent;
  border: 1px solid var(--highlight);
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 14px;
  font-family: ${props => props.theme.fonts.mono};
  line-height: 1;
  text-decoration: none;
  color: var(--highlight);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;

  &:hover {
    background-color: var(--highlight-tint);
    box-shadow: 0 0 10px var(--highlight),
                0 0 20px var(--highlight),
                0 0 30px var(--highlight);
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;

const SocialLink = styled.a`
  color: var(--slate);
  font-size: 20px;
  transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: var(--highlight);
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>What's Next?</Title>
      <Subtitle>Get In Touch</Subtitle>
      <Description>
        Ready to collaborate on exciting projects or discuss potential opportunities? 
        Feel free to reach out! Whether it's about web development, creative ideas, 
        or just a friendly chat about tech, I'd love to connect with you.
      </Description>
      <ContactButton href="mailto:moonshad.shahid@g.bracu.ac.bd">
        Say Hello
      </ContactButton>
      <SocialLinks>
        <SocialLink href="https://github.com/moonshad13" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/moonshad-shahid-b71a1a224/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </SocialLink>
        <SocialLink href="https://www.instagram.com/moonshadshahid/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </SocialLink>
        <SocialLink href="https://www.facebook.com/moonshad07/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </SocialLink>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;