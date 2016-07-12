'use strict'

var fetcher = {}
fetcher.load = function(options,callback){
  var apiRoot = 'https://api.feednami.com/api/v1'
  var feedUrl = options
  if(typeof options == 'object'){
    feedUrl = options.url
  }
  var qs = 'url='+encodeURIComponent(feedUrl)
  if(options.format){
    qs += '&include_xml_document&format='+options.format
  }
  if(options.includeXml){
    qs += '&include_xml_document'
  }
  var url = apiRoot+'/feeds/load?'+qs

  return new Promise((resolve, reject) => {
    fetch(url)
    .then((response) => response.json() )
    .then(responseData => {
      resolve(responseData.feed);
    })
    .catch(error => {
      reject(error);
    });
  });
}

fetcher.loadGoogleFormat = function(feedUrl,callback){
  return feednami.load({
    url: feedUrl,
    format: 'google',
    includeXml: true
  },callback)
}

module.exports = fetcher;