import React from 'react';

const UserMenu = ({ avatar, email, onLogout }) => (
  <div>
    <img src={avatar} alt="" width="32" />
    <span>Welcom,{email}</span>
    <button type="button" onClick={onLogout}>
      logout
    </button>
  </div>
);

export default UserMenu;
