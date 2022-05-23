import React from "react";
import { Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import BookPage from './components/BookPage'

function App() {
  return (
    <div className="content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/book/:id' element={< BookPage />} />
      </Routes>
    </div>
  );
}
export default App;
