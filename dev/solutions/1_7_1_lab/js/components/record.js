/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Record = React.createClass({
  render:function(){
    return (
      <p>{this.props.fullName}</p>
    )
  }
});

module.exports = Record;