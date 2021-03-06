import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Nav/Navbar.css';
import './styles/Home/Home.css';
import './styles/main.css';
import './styles/Book-page/book-page.css';
import './styles/Favourite/favourite.css';
import './styles/Loader/loader.css';
import './styles/fontello/css/fontello.css';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>

);