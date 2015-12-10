/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Record = React.createClass({
  makeUpdate: function(){
    this.setState({name: "Daniel Grunfeld", age: 4});
  },
  render:function(){
    return (
      <div>
        <p>Biolotical Age: {this.props.age}</p>
        <p>Maturity Level: {this.props.maturity_level}</p>
        <button className="greeting-btn" onClick={this.props.update}>Click me</button>
      </div>
    )
  }
});

module.exports = Record;