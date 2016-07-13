'use strict';

function loadFeed () {
	return {
		type: 'FEED_LOADED'
	};
}

function loadingFeed () {
	return {
		type: 'FEED_LOADING'
	};
}

function refreshFeed () {
	return {
		type: 'FEED_REFRESH'
	};
}

module.exports = {
	loadFeed,
	loadingFeed,
	refreshFeed
};