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
    type: 'EDIT_CHANNEL'
  };
}

module.exports = {
  addChannel,
  deleteChannel,
  editChannel
};