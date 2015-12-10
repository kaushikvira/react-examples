/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Image = require('./components/image.js');
var Caption = require('./components/caption.js');

var data = {caption: "Bulldogs are the best dogs in the world!"}

var ImageBox = React.createClass({
  getInitialState: function(){
    return {captionText: 'A somewhat good dog'};
  },
  componentDidMount: function() {
    // Copies the idea of an AJAX call
    var myAjaxData = data;
    this.setState({captionText: data.caption});
  },
  render: function() {
    return (
      <div className="image-box">
        <h1>My Favorite Dog</h1>
        <Image  />
        <Caption text={this.state.captionText} />
      </div>
    );
  }
});

ReactDOM.render(
  <ImageBox />,
  document.getElementById('main')
);
