import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Item from './Item';
import Ask from '../views/Ask';
import Show from '../views/Show';
import Jobs from '../views/Jobs';
import NotFound from './NotFound';
import Login from '../views/Login';
import Newest from '../views/Newest';
import TopStories from '../views/TopStories';
import Bookmarks from '../views/bookmark/Bookmarks';

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
        <Route path={ROUTES.ASK} component={Ask} />
        <Route path={ROUTES.SHOW} component={Show} />
        <Route path={ROUTES.JOBS} component={Jobs} />
        <Route path={ROUTES.NEWEST} component={Newest} />
        <Route path={ROUTES.ITEM + ':id'} component={Item} />
        <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        <Route path={ROUTES.LOGIN} component={withLogin(Login)} />
        <Route
          path={ROUTES.BOOKMARKS}
          component={withAuthentication(Bookmarks)}
        />
        <Route
          path={ROUTES.BOOKMARKS}
          component={withAuthentication(Bookmarks)}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Main;
