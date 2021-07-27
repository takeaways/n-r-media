import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import TvListPage from './tv-list.component';

function TvPage() {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={url}>
        <TvListPage />
      </Route>
    </Switch>
  );
}

export default TvPage;
