// actions helpers
const remove = (state, action) => {
  const elemToRemoveArray = state.slice().filter(item => item._id === action._id);
  if (Array.isArray(elemToRemoveArray) && elemToRemoveArray.length) {
    const elemToRemoveIndex = state.indexOf(elemToRemoveArray[0]);
    return [
      ...state.slice(0, elemToRemoveIndex),
      ...state.slice(elemToRemoveIndex + 1),
    ];
  }
  return state;
};

const edit = (state, action) => {
  const elemToEditArray = state.slice().filter(item => item._id === action._id);
  if (Array.isArray(elemToEditArray) && elemToEditArray.length) {
    const elemToEditIndex = state.indexOf(elemToEditArray[0]);
    const newState = state.slice();
    newState[elemToEditIndex].name = action.name;
    return newState;
  }
  return state;
};

const add = (state, action) => {
  const newItemId = action.data._id;
  const isNotUniq = state.find(i => i._id === newItemId);
  if (!isNotUniq) {
    return state.concat([action.data]);
  }
  return state;
};

function client(state = [], action) {
  switch (action.type) {
    case 'ADD_CLIENTS':
      return add(state, action);
    case 'REMOVE_CLIENTS':
      return remove(state, action);
    case 'EDIT_CLIENTS':
      return edit(state, action);
    case 'GET_ALL_CLIENTS':
      return action.data;
    default:
      return state;
  }
}

export default client;
