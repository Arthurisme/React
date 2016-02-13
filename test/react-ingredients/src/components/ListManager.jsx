var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./List.jsx');


var ListManager = React.createClass({

getInitialState: function(){
    return {items:[], newItemText:''};
},

onChange:function(e){
  this.setState({newItemText:e.target.value});
},

handelSubmit: function(e){
  e.preventDefault();

  var currentItems = this.state.items;

  currentItems.push(this.state.newItemText);

  this.setState({items:currentItems, newItemText:""});
},

render:function(){

  return(
    <div>
      <h4>
        {this.props.title}
      </h4>

        <form onSubmit={this.handelSubmit}>
          <input onChange={this.onChange} value={this.state.newItemText} />
          <button>Add</button>
        </form>

        <List items={this.state.items} />
    </div>
  );

}










});


module.exports = ListManager;
