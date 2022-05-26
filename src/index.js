import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Nav/Navbar.css'
import './styles/Home/Home.css'
import './styles/main.css'
import './styles/fontello/css/fontello.css'
import './styles/book-page/book-page.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);