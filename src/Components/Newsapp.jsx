import React, { useEffect, useState } from 'react';
import Card from './Card';
import  logo  from "../assets/SNAP__News__logo.jpg";


function Newsapp() {
  // ইউজারের সার্চ ইনপুট রাখার জন্য স্টেট
  const [search, setSearch] = useState('bangladesh');
  // API থেকে আসা নিউজ ডেটা রাখার জন্য স্টেট
  const [newsData, setNewsData] = useState([]);

  const API_KEY = '9d87ea8c219d4151bc2fb106578542bf';

  // ইনপুট ফিল্ডে টাইপ করলে সার্চ স্টেট আপডেট হবে
  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  // API থেকে ডেটা ফেচ করার জন্য ফাংশন
  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // পেজ প্রথম লোড হওয়ার সময় একবার ডেটা লোড হবে
  useEffect(() => {
    getData();
  }, []);

  // ক্যাটাগরি বাটনে ক্লিক করলে সার্চ স্টেট আপডেট হবে
  const userInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1 ><img className='logo' src={logo} ></img>SNAP News</h1> {/* ওয়েবসাইট টাইটেল */}
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
            onChange={handleInput} // ইনপুট পরিবর্তন হলে সার্চ স্টেট আপডেট হবে
          />
          <button onClick={getData}>Search</button> {/* সার্চ বাটনে ক্লিক করলে API কল */}
        </div>
      </nav>

      <div>
        <p className="head">Stay Updated with SNAP News</p> {/* হেডলাইন */}
      </div>

      <div className="categoryBtn">
        {/* ক্যাটাগরি বাটনগুলো */}
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>
        {/* নিউজ কার্ড দেখানোর জন্য Card কম্পোনেন্ট */}
        <Card data={newsData} />
      </div>
    </div>
  );
}

export default Newsapp;
