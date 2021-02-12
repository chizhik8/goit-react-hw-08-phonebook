import React from 'react';
import { NavLink } from 'react-router-dom';
import { maineroutes } from '../../routes';

export default function Navigation() {
  return (
    <div>
      <ul className="NavLinkList">
        {maineroutes.map(route => {
          return (
            route.isVisible && (
              <li key={route.path} className="NavLinkItem">
                <NavLink
                  exact={route.exact}
                  to={route.path}
                  className="NavLink"
                  activeClassName="NavLinkActive"
                >
                  {route.name.toUpperCase()}
                </NavLink>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
