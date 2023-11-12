import React, { useState } from 'react';

const FavoritesPage = () => {
  
  const [movies, setMovies] = useState([
//   API
  ])
  const toggleFavoriteStatus = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, isFavorite: !movie.isFavorite } : movie
      )
    );
  };

  return (
    <div>
        {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <strong>{movie.title}</strong> ({movie.released})({movie.director})({movie.genre})({movie.rated}){' '}
              <button onClick={() => toggleFavoriteStatus(movie.id)}>
                {movie.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className='favoritesErrorMessage'>
      <h1>Sorry, no page uncovered!</h1>
      <div className="favoritesErrorImage">
        <img src="../public/photo-1518043129420-ed9d4efcdcc9 (1).avif" alt="theatre out of order" />
      </div>
    </div>
      )}
    </div>
  );
};

export default FavoritesPage;
