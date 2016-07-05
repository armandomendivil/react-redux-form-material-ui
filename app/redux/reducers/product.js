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
    const obj = {};
    obj.name = `${action.data.name} - ${action.data._id}`;
    obj._id = action.data._id;
    return state.concat([obj]);
  }
  return state;
};

function product(state = [], action) {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return add(state, action);
    case 'REMOVE_PRODUCTS':
      return remove(state, action);
    case 'EDIT_PRODUCTS':
      return edit(state, action);
    case 'GET_ALL_PRODUCTS':
      return action.data;
    default:
      return state;
  }
}

export default product;
