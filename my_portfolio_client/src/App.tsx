import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <main>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
    < Footer />
    </div>
  );
}

export default App;
