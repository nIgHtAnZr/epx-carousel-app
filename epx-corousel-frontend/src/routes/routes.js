import React from 'react';
import { Router as ReactRouter, Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import PageNotFound from '../components/errorPages/PageNotFound';
import InternalServerError from '../components/errorPages/InternalServerError';
import SlideWrapper from '../containers/slides';
import { deps } from '../redux/store';

const Routes = () => {
  const { history } = deps;

  return (
    <ReactRouter history={history}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={SlideWrapper} />
          <Route
            exact
            path="/internal-server-error"
            history={history}
            component={InternalServerError}
          />
          <Route
            history={history}
            component={PageNotFound}
          />
        </Switch>
      </ConnectedRouter>
    </ReactRouter>
  );
};

export default Routes;
