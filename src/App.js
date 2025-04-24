import React, { useState, useEffect } from 'react';
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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      <GlobalStyles />
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div className="content-container">
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
        </div>
      )}
    </div>
  );
}

export default App;
