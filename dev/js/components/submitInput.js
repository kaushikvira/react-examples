/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var SubmitInput = React.createClass({
  render:function(){
    return (
      <div>
        <input type="Submit" value="Submit" className="submit-button" />
      </div>
    )
  }
});

module.exports = SubmitInput;
