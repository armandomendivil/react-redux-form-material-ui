import { combineReducers } from 'redux';
import { clientReducer, clientForm } from '../../helpers/modelReducers';
import clients from './client';
import products from './product';
import dialogModal from './dialogModal';
import paginate from './paginate';

// Main reducer
const mainReducer = combineReducers({
  client: clientReducer,
  clientForm,
  clients,
  products,
  dialogModal,
  paginate,
});

export default mainReducer;
