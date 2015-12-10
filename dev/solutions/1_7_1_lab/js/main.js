/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Record = require('./components/record.js');

var contacts = [];

var Greeter = React.createClass({
  makeUpdate: function(e){
    e.preventDefault();
    contacts.push({fullName: e.target[0].value});
    e.target[0].value = '';
    this.setState({});
  },
  render: function() {
    if (typeof(contacts) !== 'undefined') {  
      var people = contacts.map(function(contact) {
        return (
          <Record fullName={contact.fullName}>
          </Record>
        );
      });
    }
    return (
      <div className="phone-book contact-form">
        <h1>Contact Book</h1>
        <form onSubmit={this.makeUpdate}>
          <input type="text" name="fullName" placeholder="Enter Name" className="name-input" />
          <input type="submit" value="submit" className="submit-button" />
        </form>
        {people}
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('main')
);
