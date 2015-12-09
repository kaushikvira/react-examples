/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Image = require('./components/image.js');
var Caption = require('./components/caption.js');

var ImageBox = React.createClass({
  render: function() {
    return (
      <div className="image-box">
        <h1>My Favorite Dog</h1>
        <Image />
        <Caption />
      </div>
    );
  }
});

ReactDOM.render(
  <ImageBox />,
  document.getElementById('main')
);
