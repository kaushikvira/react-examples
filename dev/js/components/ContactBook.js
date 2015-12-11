/** @jsx React.DOM */
var React = require('react');
var Search = require("./Search");
var ContactList = require("./ContactList")

var ContactBook = React.createClass({
    contactData: [{name: "kaushik"}, {name: "Hellllo"}],
    getInitialState: function() {
        return {data: this.contactData};
    },
    onAddName: function(name) {
        this.contactData.push({name: name})
        this.setState({});
    },
    render: function() {
        return (
            <div className="ContactBookWrapper">
                This is Wrapper
                <Search onAddName={this.onAddName}/>
                <ContactList contactData={this.state.data}/>
            </div>
        )
    }
});

module.exports = ContactBook;
