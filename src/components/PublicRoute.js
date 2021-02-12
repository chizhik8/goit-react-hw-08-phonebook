import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/selectors/authSelectors';

const PublicRoute = ({
  component: Component,
  isLogin,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => {
      return isLogin && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(PublicRoute);
