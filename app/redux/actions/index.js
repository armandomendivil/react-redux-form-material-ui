/*
 * action types
 */

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

export function edit(type, data) {
  return {
    type,
    data,
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
