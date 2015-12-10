/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Record = React.createClass({
    render: function() {
        return (
            <div className="contract">
                {this.props.person}
            </div>
        )
    }
});

module.exports = Record;
