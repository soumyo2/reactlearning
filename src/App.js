import React from "react";
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/includes/Navbar";
import Footer from "./components/includes/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contact" element = {<Contact/>}/>
          </Routes>
         <Footer/> 
      </div>
    </Router>
  );
}

export default App;
