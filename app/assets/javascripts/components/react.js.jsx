/** @jsx React.DOM */
var HelloWorld = React.createClass({
  render: function() {
    return (
      <div className='HelloWorld'>
        Hello, world!
      </div>
      );
  }
});

var ready = function () {
  React.render(
    <HelloWorld />,
    document.getElementById('react')
  );
};

$(document).ready(ready);