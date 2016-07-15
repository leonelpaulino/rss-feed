'use strict'

function addTag (tag, tags) {
  return {
    type: 'ADD_TAG',
    tags: tags.concat([tag])
  };
}

module.exports = {
  addTag
};