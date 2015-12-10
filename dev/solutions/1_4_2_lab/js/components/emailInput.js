/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Image = React.createClass({
  render:function(){
    return (
      <div>
        <input type="email" placeholder="email" name="email" />
      </div>
    )
  }
});

module.exports = Image;
