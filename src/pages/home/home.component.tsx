import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Genre, Movie } from '../../types/movie';
import MovieList from '../../components/movie/movie-list.component';
import Paging from '../../components/page/page.component';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useEffect } from 'react';

type MovieResponse = {
  page: number;
  total_pages: number;
  results: Movie[];
};
type GenresResponse = {
  genres: Genre[];
};

function HomePage() {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const [page, setPage] = useState(query.page ? Number(query.page) : 1);
  const genres = useFetch<GenresResponse>('/genre/movie/list');
  const response = useFetch<MovieResponse>('/movie/popular', {
    params: {
      page,
    },
  });

  useEffect(() => {
    setPage(query.page ? Number(query.page) : 1);
  }, [query]);

  return (
    <>
      <Paging page={response?.page || 0} total={response?.total_pages || 0} />
      <MovieList movies={response?.results || []} genres={genres?.genres || []} />
    </>
  );
}

export default HomePage;
