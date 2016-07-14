'use strict';
const INITIAL_STATE = {
  channels: [{name:'CNN', url: 'http://holamundo.com.do', tags: ['EI']}],
  channel: undefined
};

function channels(state=INITIAL_STATE, action) {
  switch (action.type){
    case 'EDIT_CHANNEL':
      return state;
    case 'TOGGLE_MODAL_CHANNEL':
      return {
        ...state,
        channel: action.channel,
        isModalOpen: action.isModalOpen
      };
    case 'ADD_CHANNEL':
      return state;
    case 'DELETE_CHANNEL':
      return state;
    default:
      return {
        ...state,
        channels: state.channels
      };
  }
}

module.exports = channels;
