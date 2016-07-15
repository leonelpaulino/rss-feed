'use strict';
const INITIAL_STATE = {
  tags: ['NEWS','SPORTS']
};

function tags(state=INITIAL_STATE, action) {
  if (action.type === 'ADD_TAG') {
    return {
      ...state,
      tags: action.tags
    };
  } else {
    return {
      ...state,
      tags: state.tags
    };
  }
}

module.exports = tags;
