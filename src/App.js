import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { maineroutes } from './routes';

import authOperation from './redux/operations/authOperation';
import Header from './components/Header/Header';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {
  componentDidMount() {
    console.log('componentDidMount:', this.props.onGetCurrentUser());
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Suspense fallback={<h1>Loading....</h1>}>
          <Switch>
            {maineroutes.map(route => {
              return route.private ? (
                <PrivateRoute key={route.path} {...route} />
              ) : (
                <PublicRoute
                  key={route.path}
                  {...route}
                  restricted={route.restricted}
                />
              );
            })}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperation.getCurrentUser,
})(App);
