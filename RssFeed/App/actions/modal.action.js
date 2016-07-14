'use strict'

function toggleModal (isOpen) {
  return {
    type: 'TOGGLE_MODAL',
    isModalOpen: isOpen
  }
}

module.exports = {
  toggleModal
};