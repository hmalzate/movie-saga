import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function FeaturedMovies() {
  const [movies, setMovies] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://digital-backend-h5j1.onrender.com';

  useEffect(() => {
    fetch(`${backendUrl}/movies?type=movie`)
      .then(response => response.json())
      .then(data => setMovies(data.data))
      .catch(error => console.error('Error fetching the movie data:', error));
  }, [backendUrl]);

  return (
    <div className="featured-section">
      <div className="featured-header">
        <h2>Featured Films</h2>
        <div className="view-all">
          <Link to="/movies">View All</Link>
        </div>
      </div>
      <div className="featured-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="featured-item">
            <Link to={`/movie/${movie.id}`}>
              <div className="category-tag">{movie.category}</div>
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedMovies;
