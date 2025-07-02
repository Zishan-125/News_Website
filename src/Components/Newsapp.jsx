import React, { useEffect, useState } from 'react';
import Card from './Card';
import logo from "../assets/SNAP__News__logo.jpg";

function Newsapp() {
  const [search, setSearch] = useState('bangladesh');
  const [newsData, setNewsData] = useState([]);

  const API_KEY = 'defa9cfcbe4cc0303c6050c71b3f6f27';

  // Handle user typing in search input
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // Fetch news from GNews API
  const getData = async () => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${search}&token=${API_KEY}&lang=en`
      );
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Load default news on page load
  useEffect(() => {
    getData();
  }, []);

  // Handle category button clicks
  const handleCategory = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <div>
          <h1>
            <img className='logo' src={logo} alt="Snap News Logo" /> SNAP News
          </h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      {/* Headline */}
      <div>
        <p className="head">Stay Updated with SNAP News</p>
      </div>

      {/* Category Buttons */}
      <div className="categoryBtn">
        <button onClick={handleCategory} value="sports">Sports</button>
        <button onClick={handleCategory} value="politics">Politics</button>
        <button onClick={handleCategory} value="entertainment">Entertainment</button>
        <button onClick={handleCategory} value="health">Health</button>
        <button onClick={handleCategory} value="fitness">Fitness</button>
      </div>

      {/* News Cards */}
      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
}

export default Newsapp;
