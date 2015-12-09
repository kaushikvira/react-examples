/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    handleClick:function(){
      console.log('I got clicked!');
    },
    render:function(){
      return (
        <div className="wrapper">
          <button onClick={this.handleClick}>Click Me!</button>
        </div>
      )
    }
  });

module.exports = App;
