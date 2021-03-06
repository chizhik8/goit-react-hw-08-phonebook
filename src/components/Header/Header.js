import React from 'react';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { connect } from 'react-redux';
import authSelectors from '../../redux/selectors/authSelectors';

function Header({ isLogin }) {
  return (
    <div>
      <Navigation />
      {isLogin && <UserMenu />}
      <hr />
    </div>
  );
}

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(Header);
