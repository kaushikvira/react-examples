/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var NameInput = require('./components/nameInput.js');
var EmailInput = require('./components/emailInput.js');
var PhoneInput = require('./components/phoneInput.js');
var ZipInput = require('./components/zipInput.js');
var SubmitInput = require('./components/SubmitInput.js');

var ImageBox = React.createClass({
  render: function() {
    return (
      <form className="contact-form" action="#" method="post">
        <h1>My Contact Form</h1>
        <NameInput />
        <EmailInput />
        <PhoneInput />
        <ZipInput />
        <SubmitInput />
      </form>
    );
  }
});

ReactDOM.render(
  <ImageBox />,
  document.getElementById('main')
);
