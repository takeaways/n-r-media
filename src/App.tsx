import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Main from './components/main/main.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/home/home.component';
import TvPage from './pages/tv/tv.component';
import PeoplePage from './pages/people/people.component';

function App() {
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
    </>
  );
}

export default App;
