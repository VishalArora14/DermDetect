import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Search from './components/Search/Search';
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="content">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
