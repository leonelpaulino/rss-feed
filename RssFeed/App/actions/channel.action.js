'use strict';

function addChannel (channel) {
  return {
    type: 'ADD_CHANNEL'
  };
}

function deleteChannel (url) {
  return {
    type: 'DELETE_CHANNEL'
  };
}

function editChannel (channel) {
  return {
    type: 'EDIT_CHANNEL',
    channel: channel,
  };
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
  toggleModalChannel
};