/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Record = require('./components/record.js');

var data = {name: "Ben Grunfeld", age: 35, maturity_level: 7};

var Greeter = React.createClass({
  getInitialState: function(){
    return data;
  },
  makeUpdate: function(){
    this.setState({name: "Daniel Grunfeld", age: 47, maturity_level: 3});
  },
  logGreeting: function(){
    console.log("Why hello there!");
  },
  render: function() {
    return (
      <div className="phone-book">
        <h1>Welcome, Mr {this.state.name}</h1>
        <Record age={this.state.age} maturity_level={this.state.maturity_level} update={this.makeUpdate} />
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('main')
);
