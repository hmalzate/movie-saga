// src/services/movieService.js
const BASE_URL = 'https://digital-backend-h5j1.onrender.com';

export const fetchAllMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies`);
  const data = await response.json();
  return data.data; // Adjust based on your response structure
};

export const fetchMovieById = async (id) => {
  const response = await fetch(`${BASE_URL}/movies/${id}`);
  const data = await response.json();
  return data.data; // Adjust based on your response structure
};

export const searchMoviesByTitle = async (title) => {
  const response = await fetch(`${BASE_URL}/movies/search?title=${title}`);
  const data = await response.json();
  return data.data; // Adjust based on your response structure
};
