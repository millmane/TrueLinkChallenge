var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var EventConstants = require('../constants/event_constants');

var EventStore = new Store(AppDispatcher);
var _events = {};

EventStore.all = function () {
  return Object.assign({}, _events);
};

EventStore.find = function(id){
  return Object.assign({}, _events[id]);
};


EventStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case EventConstants.EVENTS_RECEIVED:
      _events = payload.events;
      EventStore.__emitChange();
      break;
  }
};

// window.EventStore = EventStore;

module.exports = EventStore;
