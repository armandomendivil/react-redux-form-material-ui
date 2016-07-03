import { combineReducers } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';


// Main reducer
const mainReducer = combineReducers({
  client: modelReducer('client', { name: '' }),
  clientForm: formReducer('client'),
});

export default mainReducer;
