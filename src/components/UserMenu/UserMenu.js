import React from 'react';
import { connect } from 'react-redux';

import authSelectors from '../../redux/selectors/authSelectors';
import authOperation from '../../redux/operations/authOperation';

const UserMenu = ({ name, onLogout }) => (
  <>
    <h3>Welcome, {name}!</h3>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperation.logout })(
  UserMenu,
);
