var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var EventStore = require('../stores/event.js');
var ClientActions = require('../actions/client_actions.js');
var IndexItem = require('./IndexItem.jsx');

var Index = React.createClass({

  _eventsChanged: function(){
    this.setState({events: EventStore.all()});
  },

  getInitialState: function(){
    return { events: EventStore.all() };
  },

  componentDidMount: function(){
    this.eventListener = EventStore.addListener(this._eventsChanged);
    ClientActions.fetchEvents();
  },

  componentWillUnmount: function(){
    this.eventListener.remove();
  },

  render: function(){
    var events = this.state.events;
    var eventKeys = Object.keys(events);

    return (
      <div>
        <h1>Index</h1>

          {
            eventKeys.map(function(key){
              return (<IndexItem
                event={events[key]}
                key={key} />);
            })
          }
      </div>
    );
  }
});

module.exports = Index;
