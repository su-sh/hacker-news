import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Ask from './Ask';
import Show from './Show';
import Jobs from './Jobs';
import Item from './Item';
import Login from './Login';
import Newest from './Newest';
import NotFound from './NotFound';
import TopStories from './TopStories';
import Bookmarks from './bookmark/Bookmarks';

import ROUTES from '../constants/routes';
import { withLogin } from './hoc/withLogin';
import { withAuthentication } from './hoc/withAuthentication';

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
        <Route
          path={ROUTES.BOOKMARKS}
          component={withAuthentication(Bookmarks)}
        />
        <Route path={ROUTES.ITEM + ':id'} component={Item} />
        <Route path={ROUTES.LOGIN} component={withLogin(Login)} />
        <Route
          path={ROUTES.BOOKMARKS}
          component={withAuthentication(Bookmarks)}
        />
        <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Main;
