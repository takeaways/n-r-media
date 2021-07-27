import React from 'react';
import { useEffect } from 'react';

import useFetch from './hooks/useFetch';

import { useLoadingDispatch } from './providers/loading';
import { Movie } from './types/movie';

import Navbar from './components/navbar/navbar.component';
import Main from './components/main/main.component';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import TvPage from './pages/tv/tv.component';
import PeoplePage from './pages/people/people.component';

function App() {
  const movies = useFetch<Movie>('/movie/popular');
  const setLoading = useLoadingDispatch();

  useEffect(() => {
    if (movies.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [movies]);
  return (
    <>
      <Navbar />
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage movies={movies} />;
          </Route>
          <Route path="/tv">
            <TvPage />
          </Route>
          <Route path="/people">
            <PeoplePage />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

export default App;
