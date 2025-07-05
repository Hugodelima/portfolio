import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Apresentation from './Components/Apresentation/Apresentation';
import AboutMe from './Components/AboutMe/AboutMe';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('current_theme') || 'dark');
  const [language, setLanguage] = useState(localStorage.getItem('current_language') || 'pt');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
      <Apresentation language={language} />
      <AboutMe language={language} />
      <Project language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;