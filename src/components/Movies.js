import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieList = movies.map((movie) => {
    return <div className="actor">
            <h3>{movie.title}</h3>
            <h6>{movie.time}</h6>
            <ul>
              {movie.genres.map((genre) => <li>{genre}</li>)}
            </ul>
          </div>
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
