import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Ask from './Ask';
import Show from './Show';
import Jobs from './Jobs';
import Item from './Item';
import Login from './Login';
import Newest from './Newest';
import TopStories from './TopStories';
import Bookmarks from './bookmark/Bookmarks';
import { withAuthentication } from './hoc/withAuthentication';
import ROUTES from '../constants/routes';
import '../App.css';

/**
 * This Functional Component.
 *
 * @returns {object}
 */
const Main = () => {
  return (
    <div className="main ">
      <Switch>
        <Route exact path={ROUTES.ROOT} component={TopStories} />
        <Route path={ROUTES.NEWEST} component={Newest} />
        <Route path={ROUTES.ASK} component={Ask} />
        <Route path={ROUTES.SHOW} component={Show} />
        <Route path={ROUTES.JOBS} component={Jobs} />
        <Route path={ROUTES.SUBMIT} component={withAuthentication(Bookmarks)} />
        <Route path={ROUTES.ITEM + ':id'} component={Item} />
        <Route path="/login" component={Login} />
        <Route path="/bookmark" component={withAuthentication(Bookmarks)} />
      </Switch>
    </div>
  );
};

export default Main;
