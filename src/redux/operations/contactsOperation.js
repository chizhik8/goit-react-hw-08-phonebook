import axios from 'axios';
import contactsAction from '../actions/contactsAction';

// console.firebase.google.com/u/0/project/hw-js-7/database/hw-js-7-default-rtdb/data
// axios.defaults.baseURL = 'https://hw-js-7-default-rtdb.firebaseio.com';

const addContacts = (name, number) => dispatch => {
  dispatch(contactsAction.addContactsRequest());
  axios
    .post('https://hw-js-7-default-rtdb.firebaseio.com/contacts.json', {
      name,
      number,
    })
    .then(response => {
      // console.log('response:', response.data.name);
      dispatch(
        contactsAction.addContactsSuccess({
          name,
          number,
          id: response.data.name,
        }),
      );
    })
    .catch(error => dispatch(contactsAction.addContactsError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsAction.fetchContactsRequest());
  axios
    .get('https://hw-js-7-default-rtdb.firebaseio.com/contacts.json')
    .then(response => {
      dispatch(
        contactsAction.fetchContactsSuccess(
          Object.keys(response.data).map(key => ({
            ...response.data[key],
            id: key,
          })),
        ),
      );
    })
    .catch(error => dispatch(contactsAction.fetchContactsError(null)));
};

const removeContact = id => dispatch => {
  dispatch(contactsAction.removeContactsRequest());
  // console.log('id revCont', id);
  axios
    .delete(`https://hw-js-7-default-rtdb.firebaseio.com/contacts/${id}.json`)
    .then(() => dispatch(contactsAction.removeContactsSuccess(id)))
    .catch(error => dispatch(contactsAction.removeContactsError(error)));
};

export default {
  addContacts,
  fetchContacts,
  removeContact,
};
