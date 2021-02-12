import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { maineroutes } from './routes';

import authOperation from './redux/operations/authOperation';
import Header from './components/Header/Header';

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
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
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
