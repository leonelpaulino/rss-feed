'use strict';

function toggleDrawer (isOpen) {
  return {
    type: 'TOGGLE_DRAWER',
    isOpen: isOpen
  };
}

module.exports = toggleDrawer;