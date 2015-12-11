/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var ContactBook = require("./components/ContactBook");
var ContactBook1 = require("./components/ContactBook");


ReactDOM.render(
    <div>
        <ContactBook/>
        <ContactBook1/>
    </div>,
    document.getElementById('main')
);
