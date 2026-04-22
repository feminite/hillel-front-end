import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Results from './pages/Results';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ width: '100%' }}> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

const RouteResults = () => <Results />; 

export default App;
