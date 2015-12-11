/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Search = React.createClass({
    render: function() {

        return (
            <div className="SearchWrapper">
                Search Wrapper
                <input />
                <button onClick={this.props.onSearchClick}>Add</button>
            </div>
        )
    }
});

module.exports = Search;
