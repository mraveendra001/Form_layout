import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Form from './components/Form';
import Thanks from './components/Thanks'; // Import the ThankYouPage component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/thank-you" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;
