/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Search = React.createClass({

    getInitialState: function() {
        return {text: ''};
    },
    onSearchClick: function(event) {
        this.props.onAddName(this.state.text);
    },
    handleAuthorChange: function(e) {
        this.setState({text: e.target.value});
    },
    render: function() {

        return (
            <div className="SearchWrapper">
                Search Wrapper
                <input type="text" value={this.state.text} onChange={this.handleAuthorChange}/>
                <button onClick={this.onSearchClick}>Add</button>
            </div>
        )
    }
});

module.exports = Search;
