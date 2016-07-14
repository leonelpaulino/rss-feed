'use strict';
const INITIAL_STATE = {
  isModalOpen: false
};

function modal(state=INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_MODAL') {
    return {
      ...state,
      isModalOpen: action.isModalOpen
    }
  } else {
    return state;
  }
}

module.exports = modal;
