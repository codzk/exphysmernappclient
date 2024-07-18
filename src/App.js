import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (

    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element= {<>
            <Home/>
            <About/>
            <Services/>
            <Contact/>
        </>} />
        </Routes> 
      </main>
    </Router>
  );
}

export default App;
