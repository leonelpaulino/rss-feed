'use strict';
const INITIAL_STATE = {
  tags: ['EI','ET','EE']
};

function tags(state=INITIAL_STATE, action) {
  if (action.type === 'ADD_TAG') {
    return {
      ...state,
      tags: state.tags
    };
  } else {
    return {
      ...state,
      tags: state.tags
    };
  }
}

module.exports = tags;
