import React, { useState } from 'react';

function Movies(){
    const [searchResults, setSearchResults] = useState([
    //    API DUMMY DATA
      ]);
    
    return (
        <div>
          <h1>Movie Search Results</h1>
    
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((movie) => (
                <li key={movie.id}>
                  <strong>{movie.title}</strong> ({movie.released})({movie.director})({movie.genre})({movie.rated})
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      );
    };

export default Movies;