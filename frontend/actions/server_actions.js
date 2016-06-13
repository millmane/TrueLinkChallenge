var AppDispatcher = require('../dispatcher/dispatcher');
var EventConstants = require('../constants/event_constants');
ServerActions = {
  receiveAll: function(events){
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    });
  }
};

module.exports = ServerActions;
