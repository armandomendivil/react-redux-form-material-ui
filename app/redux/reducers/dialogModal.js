function dialogModal(state = {
  open: false,
}, action) {
  switch (action.type) {
    case 'OPEN_DIALOG':
      return Object.assign({}, state, {
        open: true,
      });
    case 'CLOSE_DIALOG':
      return Object.assign({}, state, {
        open: false,
      });
    default:
      return state;
  }
}

export default dialogModal;
