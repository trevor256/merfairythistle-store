import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import Papa from 'papaparse';
import { MyComponent, Tester, UpdateYear } from './modules/extra';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [priceFilter, setPriceFilter] = useState(500);
  const [showWings, setShowWings] = useState(false);
  const [showDigital, setShowDigital] = useState(false);
  const [showsticker, setShowsticker] = useState(false);

    function initializeReactGA() {
        ReactGA.initialize('G-9ZPEFPZSXD'); // Replace with your Google Analytics tracking ID
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5rySdYHSZZQW4n5Ai3QeVY4fVSH7IONsCd-lG9o4a4lMsIgKiGYIQyOfY-giPG-wvFPbq_Kp4mlB3/pub?output=csv');
      const data = Papa.parse(response.data, { header: true, dynamicTyping: true }).data; 
      setItems(data);
    };
    fetchData();
    initializeReactGA();
  }, []);

  const filteredItems = items.filter(item => {
    if (item.price >= priceFilter) return false;
    if (showWings && item.category === 'wings') return true;
    if (showDigital && item.category === 'digital') return true;
    if (showsticker && item.category === 'sticker') return true;
    if (!showWings && !showDigital && !showsticker) return true;
    return false;
  });
    
  return (
    <React.Fragment>
      <nav>
        <div className="navitem">
          <h1>Merfairy Thistle</h1>
        </div>
<div className="navitem">
  <div className="dropdown">
    <div className="link-with-icon">
      <p>Links</p>
      <svg id="link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.6 7.5">
        <g fill="none" stroke="#fff">
          <path strokeWidth=".7" d="M6 4.6V5c-.2.5-.6.7-1 .5l-.3-.1M2.6 2.8l.1-.6c.1-.4.5-.6 1-.4l.3.1"/>
          <path strokeWidth="1" d="M5 3c.4.4.4 1 0 1.5L2.5 6.8c-.5.5-1.2.5-1.6 0l-.4-.3C.2 6 .2 5.3.6 4.9L2.4 3"/>
          <path strokeWidth="1" d="M3.7 4.5c-.5-.4-.5-1 0-1.5L6 .6C6.4.2 7.2.2 7.6.6L8 1c.4.4.4 1.1 0 1.6L6.2 4.4"/>
        </g>
      </svg>
    </div>
    <div className="dropdown-content">
      <ul>
        <li><a href="https://www.instagram.com/merfairythistle/"><p>Instagram</p></a></li>
        <li><a href="https://www.etsy.com/shop/ThistlesWorkshop"><p>Etsy</p></a></li>
      </ul>
    </div>
  </div>
          <p>Login</p>
          <svg id="login-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.86 17.96">
    <g fill="none" stroke="#fff" strokeWidth="1.59" transform="translate(-5.12 -4.33)">
      <path d="M19.2 17.87a6.01 6.01 0 0 0-.84-.97 6.29 6.29 0 0 0-2.4-1.4 6.9 6.9 0 0 0-4.01-.1 6.86 6.86 0 0 0-3.08 1.82 6.04 6.04 0 0 0-.7.93c1.42 1.43 3.36 3.34 5.38 3.34 2.16 0 4.21-2.02 5.66-3.62z"/>
      <path d="M13.55 5.12a7.64 7.64 0 0 0-7.64 7.63 7.64 7.64 0 0 0 2.26 5.4 6.49 5.97 0 0 1 .14-.25 6.49 5.97 0 0 1 .56-.68 6.49 5.97 0 0 1 .65-.6 6.49 5.97 0 0 1 .75-.52 6.49 5.97 0 0 1 .8-.4 6.49 5.97 0 0 1 .88-.3 6.49 5.97 0 0 1 .9-.18 6.49 5.97 0 0 1 .92-.06 6.49 5.97 0 0 1 .32 0 6.49 5.97 0 0 1 .32.02 6.49 5.97 0 0 1 .32.04 6.49 5.97 0 0 1 .3.05 6.49 5.97 0 0 1 .32.07 6.49 5.97 0 0 1 .3.07 6.49 5.97 0 0 1 .31.1 6.49 5.97 0 0 1 .3.1 6.49 5.97 0 0 1 .29.12 6.49 5.97 0 0 1 .28.13 6.49 5.97 0 0 1 .28.15 6.49 5.97 0 0 1 .27.15 6.49 5.97 0 0 1 .26.17 6.49 5.97 0 0 1 .25.18 6.49 5.97 0 0 1 .24.2 6.49 5.97 0 0 1 .23.2 6.49 5.97 0 0 1 .22.2 6.49 5.97 0 0 1 .2.23 6.49 5.97 0 0 1 .2.23 6.49 5.97 0 0 1 .19.24 6.49 5.97 0 0 1 .04.06 7.64 7.64 0 0 0 1.97-5.12 7.64 7.64 0 0 0-7.63-7.63z"/>
      <ellipse cx="13.56" cy="11.19" rx="3" ry="3.25"/>
    </g>
  </svg>
        </div>
      </nav>
      <main>
        <div id="main-block">
          <img alt="test" src="{item.backgroundImage}" />
          <p>Welcome to the shop for wings and stuff. This is just a placeholder.</p>
          <div className="filter">
            <h1>Filter</h1>
            <label>
              <p>Wings</p>
              <input type="checkbox" id="wings" onChange={() => setShowWings(prev => !prev)} />
            </label>
            <label>
              <p>Digital</p>
              <input type="checkbox" id="digital" onChange={() => setShowDigital(prev => !prev)} />
            </label>
            <label>
              <p>sticker</p>
              <input type="checkbox" id="sticker" onChange={() => setShowsticker(prev => !prev)} />
            </label>
            <label>
              <p>Price: $</p>{priceFilter}
              <input type="range" id="price-range" min="1" max="500" onChange={(e) => setPriceFilter(e.target.value)} />
            </label>
          </div>
        </div>
        <div id="main-gallery">
          {filteredItems.map((item, index) => (
            <article key={index}>
              <a href={item.link}>
                <img href={item.link} alt="item" src={item.img} />
                <h2>{item.category }- ${item.price}<br />{item.name}</h2>
              </a>
            </article>
          ))}
        </div>
      </main>
      <footer>
        <p>Footer</p>
        <UpdateYear />
      </footer>
    </React.Fragment>
  );
};

export default App;