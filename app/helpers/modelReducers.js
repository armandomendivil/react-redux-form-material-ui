/**
 * Initial states
 * Custom model reducer
 */
import { modelReducer } from 'react-redux-form';

// Client {Object}
export const clientReducer = modelReducer('client', {
  name: '',
  Age: '',
  Gender: '',
  City: '',
});

// clients {Array}
export const clientsReducer = modelReducer('clients', []);
