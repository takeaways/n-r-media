import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import styles from './movie.module.css';
type Props = {
  movie: Movie;
};

function MovieItem({ movie }: Props) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        className={styles.poster}
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}
      >
        <header>
          <h3>{movie.title}</h3>
          <span>{movie.genre_ids.join(',')}</span>
          <span>{movie.release_date}</span>
          <p>{movie.overview.substr(0, 100)}...</p>
        </header>
      </div>
    </Link>
  );
}

export default MovieItem;
