import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Donation from './pages/donation';
import Campaign from './pages/campaign';
import Donor from './pages/donor';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' extract element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/Donor' element={<Donor/>} />
        <Route path='/Donation' element={<Donation/>} />
        <Route path='/Campaign' element={<Campaign/>} />
    </Routes>
    </Router>
);
}
  
export default App;