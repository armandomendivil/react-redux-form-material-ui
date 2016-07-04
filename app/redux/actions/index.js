/*
 * action types
 */

export function actionDialog(type) {
  return {
    type,
  };
}

export function add(data, type) {
  return {
    type,
    data,
  };
}

export function remove(_id, type) {
  return {
    type,
    _id,
  };
}

export function edit(_id, name, type) {
  return {
    type,
    _id,
    name,
  };
}

export function getAll(data, type) {
  return {
    type,
    data,
  };
}

export function getOne(data, type) {
  return {
    type,
    data,
  };
}
