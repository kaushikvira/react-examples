/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Image = React.createClass({
  render:function(){
    return (
      <p>{this.props.text}</p>
    )
  }
});

module.exports = Image;
