'use strict';
const INITIAL_STATE = {
  feed: [],
  feedPage: 0
};

function feeds(state=INITIAL_STATE, action) {
  switch (action.type){
    case 'LOADED_FEED': 
      return {
        ...state,
        feed: action.feed,
        isLoading: action.isLoading,
        error: action.error
      };
    case 'LOADING_FEED': 
      return {
        ...state,
        isLoading: state.isLoading
      }
    default: 
      return state;
  }
}

module.exports = feeds;
