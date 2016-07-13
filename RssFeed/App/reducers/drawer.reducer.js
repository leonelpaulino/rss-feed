'use strict';
const INITIAL_STATE = {
  isOpen: false,
};

function drawer(state=INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_DRAWER') {
    return {
      ...state,
      isOpen: action.isOpen
    };
  } else {
    return state;
  }
}

module.exports = drawer;
