import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import HomeListPage from './home-list.component';
import HomeDetailPage from './home-detail.component';

function HomePage() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={url}>
        <HomeListPage />
      </Route>
      <Route path={`${url}/:movieId`}>
        <HomeDetailPage />
      </Route>
    </Switch>
  );
}

export default HomePage;
