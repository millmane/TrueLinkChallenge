//React
var React = require('react');
var ReactDOM = require('react-dom');

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var ApiUtil = require('./util/api_util.js');
var EventStore = require('./stores/event.js');
var Index = require('./components/Index.jsx');
var EventForm = require('./components/EventForm');

var App = React.createClass({

  navigateToNew: function(){
    hashHistory.push("/events/new");
  },

  handleCreate: function(e){
    e.preventDefault();
    this.navigateToNew();
  },

  render: function () {
    return (
      <div>
        <button onClick={this.handleCreate}>Create</button>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="events/new" component={EventForm}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
