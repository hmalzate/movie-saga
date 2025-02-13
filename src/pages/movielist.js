import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function MovieList() {
  const [items, setItems] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://digital-backend-h5j1.onrender.com';

  useEffect(() => {
    fetch(`${backendUrl}/movies?type=movie`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setItems(data.data);
        } else {
          setItems([]);
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => console.error('Error fetching the movie data:', error));
  }, [backendUrl]);

  return (
    <div className="movie-list">
      <h2>Movies</h2>
      <div className="grid">
        {items.map(item => (
          <div key={item.id} className="movie-item">
            <Link to={`/movie/${item.id}`}>
              <img src={item.poster} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
