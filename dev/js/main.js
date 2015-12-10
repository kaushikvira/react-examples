/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var contacts =
    [
        {id: 1, fullName: "Jim Halpern"},
        {id: 2, fullName: "Kauhsik Vira"},
        {id: 3, fullName: "yoo yo honey"}
    ];

var Record = require("./components/Record");

var PhoneBook = React.createClass({

    render: function() {

        var myContracts = this.props.data.map(function(object) {
            return (
                <Record person={object.fullName} key={object.id}>
                    {object.fullName}
                </Record>
            )
        })

        return (
            <div className="phone-book">
                <h1>My Favorite Book</h1>
                {myContracts}
            </div>
        );
    }
});

ReactDOM.render(
    <PhoneBook data={contacts}/>,
    document.getElementById('main')
);
