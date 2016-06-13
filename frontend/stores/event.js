var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var EventStore = new Store(AppDispatcher);
var _events = {};

EventStore.all = function () {
  return Object.assign({}, _events);
};

window.EventStore = EventStore;

module.exports = EventStore;
