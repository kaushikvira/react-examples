/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Record = React.createClass({
  render:function(){
    return (
      <button className="greeting-btn" onClick={this.props.greeting}>Click and Check Console</button>
    )
  }
});

module.exports = Record;