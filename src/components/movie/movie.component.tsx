import React from 'react';
import { Movie } from '../../types/movie';
import styles from './movie.module.css';
type Props = {
  movie: Movie;
};

function MovieItem({ movie }: Props) {
  return (
    <div
      className={styles.poster}
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}
    >
      <header>
        <h3>{movie.title}</h3>
        <span>{movie.genre_ids.join(',')}</span>
        <span>{movie.release_date}</span>
        <p>{movie.overview.substr(0, 30)}</p>
      </header>
    </div>
  );
}

export default MovieItem;
