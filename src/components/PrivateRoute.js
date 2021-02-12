import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/selectors/authSelectors';

const PrivateRoute = ({ component: Component, isLogin, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props => {
      return isLogin ? <Component {...props} /> : <Redirect to="/login" />;
    }}
  />
);

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(PrivateRoute);
