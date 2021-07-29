import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import PeopleListPage from './people-list.component';
import PeopleDetailPage from './people-detail.component';

function PeoplePage() {
  const { url } = useRouteMatch();
  console.log(`${url}/:id`);
  return (
    <Switch>
      <Route path={`${url}/:id`}>
        <PeopleDetailPage />
      </Route>
      <Route exact path={url}>
        <PeopleListPage />
      </Route>
    </Switch>
  );
}

export default PeoplePage;
