import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Ask from './Ask';
import Show from './Show';
import Jobs from './Jobs';
import Test from './Item';
import Login from './Login';
import Newest from './Newest';
import TopStories from './TopStories';

import ROUTES from '../routes/routes';
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
        <Route exact path="/" component={TopStories} />
        <Route path={ROUTES.NEWEST} component={Newest} />
        <Route path={ROUTES.ASK} component={Ask} />
        <Route path={ROUTES.SHOW} component={Show} />
        <Route path={ROUTES.JOBS} component={Jobs} />
        <Route path={ROUTES.SUBMIT} component={Login} />
        <Route path={ROUTES.ITEM + ':id'} component={Test} />
      </Switch>
    </div>
  );
};

export default Main;
