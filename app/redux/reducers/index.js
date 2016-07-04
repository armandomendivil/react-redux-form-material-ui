import { combineReducers } from 'redux';
import { formReducer } from 'react-redux-form';
import { clientsReducer, clientReducer } from '../../helpers/modelReducers';
import dialogModal from './dialogModal';

// Main reducer
const mainReducer = combineReducers({
  client: clientReducer,
  clients: clientsReducer,
  clientForm: formReducer('client'),
  dialogModal,
});

export default mainReducer;
