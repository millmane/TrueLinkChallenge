var AppDispatcher = require('../dispatcher/dispatcher');
var EventConstants = require('../constants/event_constants.js');

var ServerActions = require('../actions/server_actions');

var ApiUtil = {
  fetchEvents: function(filters){
    $.get('api/events', filters, function(Events){
      ServerActions.receiveAll(Events);
    });
  },
  // createEvent: function(data){
  //   $.post('api/events', { event: data }, function(event) {
  //     ServerActions.receiveSingleEvent(event);
  //   });
  // }
};
  window.ApiUtil = ApiUtil;

  module.exports = ApiUtil;
