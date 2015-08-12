var db = require('../../../helpers/models');
var foos = require('./data/foos.json');
var bars = require('./data/bars.json');

var persist = function(list, model) {
  for (var r in list){
    if(list.hasOwnProperty(r)){
      model.Insert(list[r]);
    }
  }
};

persist(foos, db.foos);
persist(bars, db.bars);

// add menu
db.settings.Update(
  {"type" : "properties"},
  { $push: { "data.user": "bars", "data.admin": "bars"} }
);
