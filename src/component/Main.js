import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Ask from './Ask';
import Newest from './Newest';
import Show from './Show';
import Jobs from './Jobs';
import Login from './Login';
import Comments from './Comments';
import TopStories from './TopStories';

import ROUTES from '../routes/routes';
import '../App.css';

/**
 * This Functional Component.
 *
 * @param {*} props
 * @returns {object}
 */
const Main = props => {
  return (
    <div className="main ">
      <Switch>
        <Route exact path="/" component={TopStories} />
        <Route path={ROUTES.NEWS} component={Newest} />
        <Route path={ROUTES.COMMENTS} component={Comments} />
        <Route path={ROUTES.ASK} component={Ask} />
        <Route path={ROUTES.SHOW} component={Show} />
        <Route path={ROUTES.JOBS} component={Jobs} />
        <Route path={ROUTES.SUBMIT} component={Login} />
      </Switch>
    </div>
  );
};

export default Main;
