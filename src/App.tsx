import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import Navbar from './components/navbar/navbar.component';
import Main from './components/main/main.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/home/home.component';
import TvPage from './pages/tv/tv.component';
import PeoplePage from './pages/people/people.component';
import GitIssue from './components/git-issue/git-issue.component';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-GGZ8SJ9WGS');
    ReactGA.pageview('/');
  }, []);
  return (
    <>
      <Navbar />
      <Main>
        <Switch>
          <Route path="/tv">
            <TvPage />
          </Route>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path={['/movie', '/']}>
            <HomePage />
          </Route>
        </Switch>
      </Main>
      <Footer />
      <GitIssue />
    </>
  );
}

export default App;
