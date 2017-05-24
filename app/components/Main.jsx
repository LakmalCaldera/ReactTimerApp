var React = require('react');
var Navigation = require('Navigation');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <div>
            <Navigation/>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
