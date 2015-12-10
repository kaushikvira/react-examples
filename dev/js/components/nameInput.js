/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var NameInput = React.createClass({
  render:function(){
    return (
      <div>
        <input type="text" placeholder="Your Name" name="fullName" />
      </div>
    )
  }
});

module.exports = NameInput;
