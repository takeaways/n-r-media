import React from 'react';

import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { MovieDetail } from '../../types/movie';
import Ball from '../../components/ball/ball.component';
import snow from '../../assets/images/snow.png';

import styles from './home-detail.module.css';

function HomeDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const response = useFetch<MovieDetail>(`/movie/${movieId}`);

  const history = useHistory();

  return (
    <>
      <article
        className={styles.article}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${response?.poster_path})`,
        }}
      >
        <button
          className={styles.back}
          onClick={() => {
            history.goBack();
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h2>{response?.title}</h2>
            <h3>{response?.tagline}</h3>
            <span>{response?.release_date}</span>
          </div>
          <div
            className={styles.headerRight}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${response?.backdrop_path})`,
            }}
          >
            <p className={styles.overview}>{response?.overview}</p>
          </div>
        </header>
        {new Array(30).fill(0).map((_, i) => (
          <Ball key={i} src={snow} />
        ))}
      </article>
    </>
  );
}

export default HomeDetailPage;
