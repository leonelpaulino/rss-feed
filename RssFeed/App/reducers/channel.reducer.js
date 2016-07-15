'use strict';
import { guid } from '../modules/guid';
const id = guid();
const INITIAL_STATE = {
  channels: [{name:'Top Stories', url: 'http://rss.cnn.com/rss/edition.rss', tag:['NEWS'], id: id}],  
  currentChannels: [{name:'Top Stories', url: 'http://rss.cnn.com/rss/edition.rss', tag:['NEWS'], id: id}],
  channel: undefined
};

function channels(state=INITIAL_STATE, action) {
  switch (action.type){
    case 'EDIT_CHANNEL':
      return {
        ...state,
        channels: action.channels
      };
    case 'FILTER_CHANNEL':
      return {
        ...state,
        currentChannels: action.currentChannels
      };
    case 'TOGGLE_MODAL_CHANNEL':
      return {
        ...state,
        channel: action.channel,
        isModalOpen: action.isModalOpen
      };
    case 'ADD_CHANNEL':
      return {
        ...state,
        channels: action.channels
      };
    case 'DELETE_CHANNEL':
      return {
        ...state,
        channels: action.channels
      };
    default:
      return {
        ...state,
        channels: state.channels
      };
  }
}

module.exports = channels;
