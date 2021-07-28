import React, { useMemo, useEffect } from 'react';
import { Genre, Movie } from '../../types/movie';
import MovieItem from './movie.component';
import styles from './movie-list.module.css';
import { useState } from 'react';

type Props = {
  movies: Movie[];
  genres: Genre[];
};
function MovieList({ movies, genres }: Props) {
  const [show, setShow] = useState(false);
  const genresMovies = useMemo(() => {
    setShow(false);
    return movies.map(movie => {
      movie.genre_ids = movie.genre_ids.map(id => {
        const found = genres.find(g => g.id === id);
        if (found) {
          return found.name;
        }
        return id;
      });
      return movie;
    });
  }, [movies, genres]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, [movies]);

  return (
    <>
      <ul className={`${styles.list} ${show ? styles.show : ''}`}>
        {genresMovies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}

export default MovieList;
