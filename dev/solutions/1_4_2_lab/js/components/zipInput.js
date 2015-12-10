/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Image = React.createClass({
  render:function(){
    return (
      <div>
        <input type="number" placeholder="Zip Code" name="zipCode" />
      </div>
    )
  }
});

module.exports = Image;
