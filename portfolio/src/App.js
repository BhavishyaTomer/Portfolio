import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './components/Custom-Nav';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
const App = () => {
  return (
    <div className='App'>
    <CustomNav/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer />
    </div>
  )
}

export default App