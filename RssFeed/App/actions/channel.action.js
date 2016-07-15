'use strict';
import { guid } from '../modules/guid';

function addChannel (channel, channels) {
  let newChannels = channels.filter((data) => channel.url === data.url);
  if (newChannels.lenght > 0){
    return {
      type: 'ADD_CHANNEL',
      channels: newChannels,
      error: 'You can\'t have two channel with the same url'
    }
  } else {
    channel.id = guid();
    return {
      type: 'ADD_CHANNEL',
      channels: channels.concat([channel]),
      error: ''
    };
  }
}

function deleteChannel (channel, channels) {
  return {
    type: 'DELETE_CHANNEL',
    channels: channels.filter((data) => channel.id !== data.id)
  };
}

function editChannel (channel, channels) {
  let newChannels = channels.filter((data) => data.id !== channel.id);
  newChannels.push(channel);
  return {
    type: 'EDIT_CHANNEL',
    channels: newChannels
  };
}

function filterChannels (tag, channels) {
  return {
    type: 'FILTER_CHANNEL',
    currentChannels: tag !== '' ? channels.filter((data) => data.tag.indexOf(tag) !== -1 ) : channels
  }
}

function toggleModalChannel (channel, isModalOpen) {
  return {
    type: 'TOGGLE_MODAL_CHANNEL',
    channel: channel,
    isModalOpen: isModalOpen
  }
}

module.exports = {
  addChannel,
  deleteChannel,
  editChannel,
  toggleModalChannel,
  filterChannels
};