/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');
var Contact = require('./Contact');

var ContactList = React.createClass({
    render: function() {
        var count = 1;
        var myContacts = this.props.contactData.map(function(contact) {
            console.log("hldfjldf" + count)
            count++;
            return (
                <Contact name={contact.name} key={count}/>
            )
        });
        return (
            <div className="ContactList">
                {myContacts}
            </div>
        )

    }
});

module.exports = ContactList;
