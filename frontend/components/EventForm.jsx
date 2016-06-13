var React = require('react');
var ClientActions = require('../actions/client_actions');
var hashHistory = require('react-router').hashHistory;


var EventForm = React.createClass({

  getInitialState: function(){
    return {
      name: "",
      startDate: "",
      recurrences: 1,
      deliveryDate: "",
      calculatedDate: "",
    };
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.setState({
      name: e.target.Name.value,
      startDate: e.target.StartDate.value,
      recurrences: e.target.Recurrences.value,
      deliveryDate: e.target.DeliveryDate.value,
      calculatedDate: ""
    });
    var _event = Object.assign({}, this.state);

    ClientActions.createEvent(_event);
    this.navigateToSearch();
  },

  navigateToSearch: function(){
    hashHistory.push("/");
  },

  handleCancel: function(e){
    e.preventDefault();
    this.navigateToSearch();
  },

  render: function(){
    return (
        <div>
          <h3>Create an Event!</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" id="Name"/>
            <br/>

            <label>Start Date</label>
            <input type="date" id="StartDate"/>
            <br/>

            <label>Recurrences</label>
            <input type="number" id="Recurrences"/>
            <br/>

            <label>Delivery Date</label>
            <input type="date" id="DeliveryDate"/>
            <br/>

            <input type="submit" value="create event"/>
          </form>

          <button onClick={this.handleCancel}>Cancel</button>
        </div>
    );
  }
});

module.exports = EventForm;
