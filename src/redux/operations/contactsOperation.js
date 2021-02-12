import axios from 'axios';
import contactsAction from '../actions/contactsAction';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const addContacts = (name, number) => dispatch => {
  dispatch(contactsAction.addContactsRequest());
  axios
    .post('/contacts', {
      name,
      number,
    })
    .then(response => {
      console.log('response addContacts:', response.data.name);
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
    .get('/contacts')
    .then(response => {
      console.log('response fetchContacts:', response.data);
      dispatch(
        contactsAction.fetchContactsSuccess(
          Object.keys(response.data).map(key => ({
            ...response.data[key],
          })),
        ),
      );
    })
    .catch(error => dispatch(contactsAction.fetchContactsError(null)));
};

const removeContact = id => dispatch => {
  dispatch(contactsAction.removeContactsRequest());
  console.log('id revCont', id);
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsAction.removeContactsSuccess(id)))
    .catch(error => dispatch(contactsAction.removeContactsError(error)));
};

export default {
  addContacts,
  fetchContacts,
  removeContact,
};
