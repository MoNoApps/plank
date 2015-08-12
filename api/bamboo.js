var utils = require('../../../helpers/utils');
var controllers = require('../../../api/controllers');
var review = require('../../../helpers/manager').review;
var manager = require('../../../helpers/manager').response;

var ping = function(req, res){
  review({ req: req, res: res }, function(err, opt){
    manager({req: req, res: res, err: err, rsp: []});
  });
};

var pong = function(req, res){
  review({ req: req, res: res }, function(err, opt){
    manager({req: req, res: res, err: err, rsp: []});
  });
};

var combo = function(req, res){
  res.json(req.params);
};

module.exports.ping = ping;
module.exports.pong = pong;
module.exports.combo = combo;
