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

module.export = {
	loadFeed,
	loadingFeed
};