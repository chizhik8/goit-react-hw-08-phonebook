import React from 'react';
import { NavLink } from 'react-router-dom';
import { maineroutes } from '../../routes';
import { connect } from 'react-redux';
import authSelectors from '../../redux/selectors/authSelectors';

function Navigation({ isLogin }) {
  return (
    <nav>
      <NavLink to="/" exact className="NavLink" activeClassName="NavLinkActive">
        Home
      </NavLink>

      {isLogin ? (
        <NavLink
          to="/contacts"
          exact
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Contacts
        </NavLink>
      ) : (
        <>
          <NavLink
            to="/register"
            exact
            className="NavLink"
            activeClassName="NavLinkActive"
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            exact
            className="NavLink"
            activeClassName="NavLinkActive"
          >
            Login
          </NavLink>
        </>
      )}

      {/* {maineroutes.map(route => (
        <NavLink
          key={route.path}
          exact={route.exact}
          to={route.path}
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          {route.name.toUpperCase()}
        </NavLink>
      ))} */}
    </nav>
  );
}

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(Navigation);
