import { combineReducers } from 'redux';
import { formReducer } from 'react-redux-form';
import { clientReducer } from '../../helpers/modelReducers';
import clients from './client';
import products from './product';
import dialogModal from './dialogModal';

// Main reducer
const mainReducer = combineReducers({
  client: clientReducer,
  clients,
  products,
  clientForm: formReducer('client'),
  dialogModal,
});

export default mainReducer;
