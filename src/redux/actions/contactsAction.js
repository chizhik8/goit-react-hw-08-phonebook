import { createAction } from '@reduxjs/toolkit';

// ---------------Add contacts--------------------------
const addContactsRequest = createAction('contacts/addRequest');
const addContactsSuccess = createAction('contacts/addSuccess');
const addContactsError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

// ---------------Remove contacts--------------------------

const removeContactsRequest = createAction('contacts/removeRequest');
const removeContactsSuccess = createAction('contacts/removeSuccess');
const removeContactsError = createAction('contacts/removeError');

// ---------------Filter--------------------------
const addFilter = createAction('contacts/addFilter', filter => ({
  payload: { filter },
}));

// --------------------export---------------------------------

export default {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactsSuccess,
  removeContactsRequest,
  removeContactsError,
  addFilter,
};
