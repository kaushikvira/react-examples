/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Image = React.createClass({
  render:function(){
    return (
      <img className="dog-image" src="img/bulldog.jpg" alt="english bulldog" />
    )
  }
});

module.exports = Image;
