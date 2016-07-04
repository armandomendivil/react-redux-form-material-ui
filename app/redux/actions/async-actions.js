import { asteroid } from '../../asteroid/asteroid';
import {
  actions,
} from 'react-redux-form';
import { add, getAll, getOne, remove, edit } from './index';

/**
 * Call method add
 * @param  {String} endpoint [endpoint name]
 * @param  {Object} data     [params]
 * @param {String} type [action type]
 * @return {void} null
 */
export function callAdd(endpoint, data) {
  return dispatch => asteroid.call(endpoint, data)
      .then(result => dispatch(add(result, '')));
}

export function callGetAll(endpoint, type, id) {
  return dispatch => asteroid.call(endpoint, id)
      .then((result) => dispatch(getAll(result, type)));
}

export function callGetOne(endpoint, _id, type) {
  return dispatch => asteroid.call(endpoint, _id)
      .then((result) => dispatch(getOne(result, type)));
}

export function callRemove(_id, endpoint, type) {
  return dispatch => asteroid.call(endpoint, _id)
      .then(() => dispatch(remove(_id, type)));
}

export function callEdit(_id, endpoint, data, type) {
  return dispatch => asteroid.call(endpoint, _id, data)
      .then(() => dispatch(edit(_id, data, type)));
}

// Calls from Model
export function callGetAllModel(endpoint, model, id) {
  return dispatch => asteroid.call(endpoint, id)
      .then((result) => dispatch(actions.change(model, result)));
}

export function callGetOneModel(endpoint, _id, model) {
  return dispatch => asteroid.call(endpoint, _id)
      .then((result) => dispatch(actions.change(model, result)));
}
