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
import Clients from './components/Clients';
import Inbox from './components/Inbox';
import ProtectedRoute from './ProtectedRoute';
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
          <Route path="/admin-dashboard" element={<ProtectedRoute element={AdminDashboard} />} />
          <Route path="/clients" element={<ProtectedRoute element={Clients} />} />
          <Route path="/inbox" element={<ProtectedRoute element={Inbox} />} />
        </Routes>
      </main>
      <FooterWithCondition />
    </Router>
  );
}

function HeaderWithCondition() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return <Header showLinks={isHomePage} showLogo={isHomePage} />;
}

function FooterWithCondition() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return <Footer showLinks={isHomePage} showLogo={isHomePage} />;
}

export default App;
