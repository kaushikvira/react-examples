/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Contact = React.createClass({
    render: function() {
        return (
            <div className="contactWrap">
                {this.props.name}
            </div>
        )
    }
});

module.exports = Contact;
