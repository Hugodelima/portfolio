import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Apresentation from './Components/Apresentation/Apresentation'
import AboutMe from './Components/AboutMe/AboutMe'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Apresentation theme={theme} setTheme={setTheme}/>
      <AboutMe theme={theme} setTheme={setTheme}/>
      <Project theme={theme} setTheme={setTheme}/>
      <Contact theme={theme} setTheme={setTheme}/>
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
