import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Createblog from './pages/Createblog'
import Blog from './pages/Blog'
// Router for easy navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Createblog" element={<Createblog />} />
          <Route exact path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
