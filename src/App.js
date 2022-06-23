import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';

function App() {
  return (

    <BrowserRouter>
    <Navigation />
     <Routes>
      <Route exact path="/"  element={<Home/>} />
      <Route exact path="/about"  element={<About/>} />
      <Route path="*"  element={<NotFound/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
