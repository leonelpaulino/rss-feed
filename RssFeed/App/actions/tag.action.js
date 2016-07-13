'use strict'

function addTag (tag) {
  return {
    type: 'ADD_TAG'
  };
}

function toggleTagModal (isOpen) {
  return {
    type: 'TOGGLE_TAG_MODAL',
    isModalOpen: isOpen
  }
}

module.exports = {
  addTag,
  toggleTagModal
};