var React = require('react');
var Navigation = require('Navigation');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Navigation/>
        <div className="row">
          <div className="columns medium-8 large-6 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
