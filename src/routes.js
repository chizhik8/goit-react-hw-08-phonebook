import { lazy } from 'react';

export const maineroutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('./pages/HomePage')),
    isVisible: true,
  },
  {
    path: '/register',
    name: 'Register',
    exact: false,
    component: lazy(() => import('./pages/RegisterPage')),
    isVisible: true,
  },
  {
    path: '/login',
    name: 'Login',
    exact: false,
    component: lazy(() => import('./pages/LoginPage')),
    isVisible: true,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    exact: false,
    component: lazy(() => import('./pages/ContactsPage')),
    isVisible: true,
  },
];
