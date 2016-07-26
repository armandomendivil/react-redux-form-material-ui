function paginate(state = {
  data: [],
  pageNum: 0,
}, action) {
  switch (action.type) {
    case 'CHANGE_PAGINATION':
      return Object.assign({}, state, {
        pageNum: action.data,
      });
    default:
      return state;
  }
}

export default paginate;
