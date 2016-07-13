'use strict';
const INITIAL_STATE = {
  tags: [],
  isModalOpen: false
};

function tags(state=INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_TAG_MODAL') {
    return {
      ...state,
      isModalOpen: action.isModalOpen
    }
  } else if (action.type === 'ADD_TAG') {
    return state;
  } else {
    return state;
  }
}

module.exports = tags;
