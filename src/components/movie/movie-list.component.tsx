import React, { useMemo } from 'react';
import { Genre, Movie } from '../../types/movie';
import MovieItem from './movie.component';
import styles from './movie-list.module.css';

type Props = {
  movies: Movie[];
  genres: Genre[];
};
function MovieList({ movies, genres }: Props) {
  const genresMovies = useMemo(() => {
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

  return (
    <>
      <ul className={styles.list}>
        {genresMovies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}

export default MovieList;
