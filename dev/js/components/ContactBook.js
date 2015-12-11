/** @jsx React.DOM */
var React = require('react');
var Search = require("./Search");
var ContactList = require("./ContactList")

var ContactBook = React.createClass({
    getInitialState: function() {
        return {data: [{name: "helllo"}, {name: "yoooooo"}]};
    },
    onAddName: function(name) {
        this.state.data.push({name: name})
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
