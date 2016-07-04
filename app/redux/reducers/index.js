import { combineReducers } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import dialogModal from './dialogModal';

// Custom model reducer
const clientsReducer = modelReducer('clients', []);

// Main reducer
const mainReducer = combineReducers({
  client: modelReducer('client', { name: '' }),
  clients: clientsReducer,
  clientForm: formReducer('client'),
  dialogModal,
});

export default mainReducer;
