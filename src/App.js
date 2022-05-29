import React from "react";
import { Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import BookPage from './components/BookPage'
import Favourite from "./components/Favourite";
import { FavouriteProvider } from './etc/FavouriteContext'
import { CountProvider } from "./etc/CountContext";

function App() {
  return (
    <div className="content">
      <FavouriteProvider>
        <CountProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path='/book/:id' element={< BookPage />} />
          </Routes>
        </CountProvider>
      </FavouriteProvider>
    </div>
  );
}
export default App;
