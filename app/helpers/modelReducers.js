/**
 * Initial states
 * Custom model reducer
 */
import { modelReducer, formReducer } from 'react-redux-form';

// Client: Initial state
const client = {
  name: '',
  Age: '',
  Gender: '',
  City: '',
};

// Client {Object}
export const clientReducer = modelReducer('client', client);

export const clientForm = formReducer('client', client);

// clients {Array}
export const clientsReducer = modelReducer('clients', []);
