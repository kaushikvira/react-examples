/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var ZipInput = React.createClass({
  render:function(){
    return (
      <div>
        <input type="number" placeholder="Zip Code" name="zipCode" />
      </div>
    )
  }
});

module.exports = ZipInput;
