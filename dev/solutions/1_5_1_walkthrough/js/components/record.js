/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Record = React.createClass({
  render:function(){
    return (
      <div className="contact">
        <hr />
        <p className="firstName">Name: {this.props.person}</p>
        <p className="firstName">Notes: {this.props.children}</p>
      </div>
    )
  }
});

module.exports = Record;