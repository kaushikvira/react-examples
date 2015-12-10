/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Record = require('./components/record.js');

var Greeter = React.createClass({
  logGreeting: function(){
    console.log("Why hello there!");
  },
  render: function() {
    return (
      <div className="phone-book">
        <h1>Greeting</h1>
        <Record greeting={this.logGreeting} />
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('main')
);
