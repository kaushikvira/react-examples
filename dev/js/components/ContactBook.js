/** @jsx React.DOM */
var React = require('react');
var Search = require("./Search");
var ContactList = require("./ContactList")

var contactData = [{name: "kaushik"}, {name: "Hellllo"}];

var ContactBook = React.createClass({

    onSearchClick: function(event) {
        console.log(event);
    },

    render: function() {
        return (
            <div className="ContactBookWrapper">
                This is Wrapper
                <Search onSearchClick={this.onSearchClick}  />
                <ContactList contactData={contactData}/>
            </div>
        )
    }
});

module.exports = ContactBook;
