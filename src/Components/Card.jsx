import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  if (!data || data.length === 0) {
    return <p>No news to display.</p>;
  }

  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => (
        <div className="card" key={curItem.url || index}>
          {curItem.urlToImage && (
            <img src={curItem.urlToImage} alt="News" />
          )}
          <div className="content">
            <a className='title' href={curItem.url} style={{ color: 'black', textDecoration: 'none' }}>
              {curItem.title}
            </a>
            <p>{curItem.description}</p>
            <button onClick={()=>curItem.url}>
              <a href={curItem.url} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                Read More
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
