'use strict'

import { combineReducers } from 'redux';
import Feed from './feed.reducer';
import Tags from './tag.reducer';
import Channles from './channel.reducer';
import Drawer from './drawer.reducer';

module.exports = combineReducers({
  feeds: Feed,
  tags: Tags,
  channels: Channles,
  drawer: Drawer
});