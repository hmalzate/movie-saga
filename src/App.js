import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import MovieList from './pages/movielist';
import MovieDetail from './pages/moviedetail';
import Registration from './components/registration';
import Login from './components/login';
import ContentSection1 from './components/ContentSection1';
import ContentSection2 from './components/ContentSection2';
import Hero from './components/Hero';
import SearchResults from './components/SearchResults';
import TVShowList from './pages/tvshowlist'; 
import Dashboard from './pages/Dashboard'; 
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <video className="background-video" src="/banner/Netflix's Chronicles of Narnia (2024) - Teaser Trailer - Greta Gerwig Reboot Concept HD.mp4" autoPlay loop muted />
        <Header user={user} onLogout={handleLogout} />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/tvshows" element={<TVShowList />} /> 
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <div className="content-section">
          <ContentSection1 />
          <ContentSection2 />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
