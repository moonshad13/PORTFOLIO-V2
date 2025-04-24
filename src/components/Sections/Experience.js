import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledExperienceSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 0;
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 200px;
  border-left: 2px solid var(--lightest-navy);
`;

const Tab = styled.button`
  text-align: left;
  padding: 15px 20px;
  background: transparent;
  color: ${props => props.isActive ? 'var(--highlight)' : 'var(--light-text)'};
  border: none;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 14px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: var(--highlight);
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const TabPanel = styled(motion.div)`
  padding: 10px 30px;
  width: 100%;
`;

const JobTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  color: var(--lightest-text);
  margin-bottom: 5px;
`;

const Company = styled.span`
  color: var(--highlight);
`;

const JobDate = styled.p`
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--light-text);
  margin-bottom: 25px;
`;

const JobDescription = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    color: var(--light-text);

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--highlight);
    }
  }
`;

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: 'Upwork',
      title: 'Freelance Front-End Developer',
      date: 'Jul 2020 - 2023',
      duties: [
        'Designed and implemented responsive web applications for global clients using modern front-end technologies.',
        'Optimized website performance, reducing load times by 40%',
        'Developed reusable UI components using React.js and Angular, improving development efficiency.'
      ]
    },
    {
      company: 'BRAC University',
      title: 'Student Tutor',
      date: 'Jun 2021 - Dec 2021',
      duties: [
        'Provided academic support to students, clarifying complex concepts in physics and calculus (PHY111: Principles of Physics, MAT110: Differential Calculus and Coordinate Geometry).',
        'Conducted one-on-one tutoring and group sessions, leading to improved student performance.',
        'Developed structured lesson plans and practice exercises to align with university coursework.'
      ]
    }
  ];

  return (
    <StyledExperienceSection id="experience">
      <h2>Where I've Worked</h2>
      <TabsContainer>
        <TabList>
          {jobs.map((job, index) => (
            <Tab
              key={index}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </Tab>
          ))}
        </TabList>
        
        <TabPanel
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <JobTitle>
            {jobs[activeTab].title} <Company>@ {jobs[activeTab].company}</Company>
          </JobTitle>
          <JobDate>{jobs[activeTab].date}</JobDate>
          <JobDescription>
            {jobs[activeTab].duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </JobDescription>
        </TabPanel>
      </TabsContainer>
    </StyledExperienceSection>
  );
};

export default Experience;