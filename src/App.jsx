import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Apresentation from './Components/Apresentation/Apresentation';
import AboutMe from './Components/AboutMe/AboutMe';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?current_theme : 'light');
  const [language, setLanguage] = useState(localStorage.getItem('current_language') || 'pt');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
      <Apresentation theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
      <AboutMe theme={theme} setTheme={setTheme} language={language} />
      <Project theme={theme} setTheme={setTheme} language={language} />
      <Contact theme={theme} setTheme={setTheme} language={language} />
      <Footer theme={theme} setTheme={setTheme} language={language} />
    </div>
  );
}

export default App;