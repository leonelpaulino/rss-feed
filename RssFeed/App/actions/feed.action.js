'use strict';
import fetcher from '../modules/fetcher';

function fetchFeed (currentChannel) {
  return function (dispatch) {
    dispatch(loadingFeed());
    return fetcher.loadGoogleFormat(currentChannel.url).then((result) => {
      dispatch(loadedFeed(result.entries));
    }).catch((error) => {
      dispatch(loadedFeed(null, error));
    })
  }
}

function loadMore (){
  return {
    type: 'FEED_REFRESH'
  };
}

function loadedFeed (result,error=null) {
  console.log(result)
  return {
    type: 'LOADED_FEED',
    isLoading: false,
    feed: result,
    error: error
  }
}

function loadingFeed () {
  return {
    type: 'LOADING_FEED',
    isLoading: true
  };
}

function refreshFeed () {
  return {
    type: 'FEED_REFRESH'
  };
}

module.exports = {
  fetchFeed,
  refreshFeed,
  loadMore
};