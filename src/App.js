import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <HeaderWithCondition />
      <main>
        <Routes>
          <Route path="/" element={<>
            <Home />
            <About />
            <Services />
            <Contact />
          </>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      <FooterWithCondition />
    </Router>
  );
}

function HeaderWithCondition() {
  const location = useLocation();
  const isSpecialRoute = location.pathname === '/admin-login' || location.pathname === '/admin-dashboard';
  return <Header showLinks={!isSpecialRoute} showLogo={!isSpecialRoute} />;
}

function FooterWithCondition() {
  const location = useLocation();
  const isSpecialRoute = location.pathname === '/admin-login' || location.pathname === '/admin-dashboard';
  return <Footer showLinks={!isSpecialRoute} showLogo={!isSpecialRoute} />;
}

export default App;
