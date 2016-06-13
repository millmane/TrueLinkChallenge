var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;

var IndexItem = React.createClass({
  handleClick: function() {
    var eventID = this.props.event.id;
    hashHistory.push("events/" + eventID );
  },

  render: function(){
    var event = this.props.event;

    return (
        <div className="event-index-item"
             onClick={this.handleClick}
             key={this.props.key}>
          {event.name}
        </div>
    );
  }
});

module.exports = IndexItem;
