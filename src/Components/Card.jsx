import React from 'react';

const Card = ({ data }) => {
  console.log(data); // ডেটা কনসোল এ দেখানোর জন্য

  // যদি ডেটা না থাকে বা লিস্ট খালি হয়
  if (!data || data.length === 0) {
    return <p>No news to display.</p>; // কোনো নিউজ না থাকলে দেখাবে
  }

  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => (
        <div className="card" key={curItem.url || index}>
          
          {/* নিউজের ইমেজ */}
          {curItem.image && (
            <img src={curItem.image} alt={curItem.title || "News Image"} />
          )}

          <div className="content">
            
            {/* নিউজের শিরোনাম */}
            <a
              className='title'
              href={curItem.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              {curItem.title}
            </a>

            {/* নিউজের বিবরণ */}
            <p>{curItem.description}</p>

            {/* Read More বাটন */}
            <a
              href={curItem.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  backgroundColor: '#B22222',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
              >
                Read More
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
