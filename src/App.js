import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';

import './App.css';

function App() {
  return (

    <Router>
      <HeaderWithCondition />
      <main>
        <Routes>
          <Route path="/" element= {<>
            <Home/>
            <About/>
            <Services/>
            <Contact/>
        </>} />
            <Route path="/admin-login" element={<AdminLogin/>}/>
        </Routes> 
      </main>
      <Footer/>
    </Router>
  );
}

function HeaderWithCondition() {
  const location = useLocation();
  const isAdminLogin = location.pathname === '/admin-login';
  return <Header showLinks={!isAdminLogin} showLogo={!isAdminLogin} />;
}

export default App;
