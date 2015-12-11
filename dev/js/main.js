/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var ContactBook = require("./components/ContactBook");

ReactDOM.render(
    <ContactBook />,
    document.getElementById('main')
);
