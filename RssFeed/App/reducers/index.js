'use strict'

import { combineReducers } from 'redux';
import Feed from './feed.reducer';
import Tags from './tag.reducer';
import Channels from './channel.reducer';
import Modal from './modal.reducer';
import Drawer from './drawer.reducer';

module.exports = combineReducers({
  feeds: Feed,
  tags: Tags,
  channels: Channels,
  drawer: Drawer,
  modal: Modal
});