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
            <Route path="/gutenberg-project" element={<Home />} />
            <Route path="/gutenberg-project/favourite" element={<Favourite />} />
            <Route path='/gutenberg-project/book/:id' element={< BookPage />} />
          </Routes>
        </CountProvider>
      </FavouriteProvider>
    </div>
  );
}
export default App;
