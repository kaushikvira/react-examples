/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var ContactBook = require("./components/ContactBook");
var ContactBook1 = require("./components/ContactBook");

ReactDOM.render(
    <div>
        <ContactBook key="1"/>
        <ContactBook1 key="2"/>
    </div>,
    document.getElementById('main')
);
