/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Record = require('./components/record.js');

var contacts = [
  {id: 1, fullName: "Jim Halpern", notes: "Sales Manager"},
  {id: 2, fullName: "Michael Scott", notes: "Office Manager"},
  {id: 3, fullName: "Andy", notes: "Assistant Manager"}
];

var PhoneBook = React.createClass({
  render: function() {
    var contacts = this.props.data.map(function(contact) {
      return (
        <Record person={contact.fullName} key={contact.id}>
          {contact.notes}
        </Record>
      );
    });
    return (
      <div className="phone-book">
        <h1>My Phone Book</h1>
        {contacts}
      </div>
    );
  }
});

ReactDOM.render(
  <PhoneBook data={contacts} />,
  document.getElementById('main')
);
