import React from 'react';
import { Movie } from '../../types/movie';

type Props = {
  movies: Movie[];
};
function HomePage({ movies }: Props) {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}

export default HomePage;
