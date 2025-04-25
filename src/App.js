import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/UI/Navigation';
import Hero from './components/Sections/Hero';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import BackgroundContainer from './components/Layout/BackgroundContainer';
import Loader from './components/UI/Loader';
import Footer from './components/UI/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <GlobalStyles />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'var(--background)'
            }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BackgroundContainer>
              <Navigation />
              <main>
                <Hero />
                <Experience />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </BackgroundContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
