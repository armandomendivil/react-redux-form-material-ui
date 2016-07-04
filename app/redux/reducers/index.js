import { combineReducers } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';

// Custom model reducer
const clientsReducer = modelReducer('clients', []);

// Main reducer
const mainReducer = combineReducers({
  client: modelReducer('client', { name: '' }),
  clients: clientsReducer,
  clientForm: formReducer('client'),
});

export default mainReducer;
