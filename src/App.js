import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
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
        </>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
