var api = {
  GET: [
    {
      route: "ping",
      fn: require('./api/bamboo').ping,
      params: {}
    },
    {
      route: "combo",
      fn: require('./api/bamboo').combo,
      params: {label: 1}
    }
  ],
  POST: [
    {
      route: "combo",
      fn: require('./api/bamboo').combo,
      params: {label: 1}
    },
    {
      route: "pong",
      fn: require('./api/bamboo').pong,
      params: {}
    }
  ]
};
var web = {};
var sio = {};
var tests = {};
var assets = {};
var helpers = {};

module.exports.api = api;
module.exports.web = web;
module.exports.sio = sio;
module.exports.tests = tests;
module.exports.assets = assets;
module.exports.helpers = helpers;
