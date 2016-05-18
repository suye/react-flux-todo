var React = require("react");
var TodoAction = require('../actions/TodoAction.react');
var Footer = React.createClass({
	handleClick: function(){
		TodoAction.deleteAll();
	},
	render: function(){
		
		var style = {
			display:"none"
		};
		var todos = [];
		for(var key in this.props.list){
			todos.push(
				key
			);
		}
		if(todos.length == 0){
			return null;
		}
		var str = "";
		if(todos.length > 1){
			str = "items left";
		}else if(todos.length == 1){
			str = "item left";
		}
		return(
			<footer id="footer" >
				<span id="todo-count">
					<strong>{todos.length > 0 ? todos.length : ""}</strong>
					<span>{str}</span>
				</span>
				<button id="clear-completed" onClick={this.handleClick}>
					<span>Clear completed (</span>
					<span>{todos.length}</span>
					<span>)</span>
				</button>
			</footer>
		);
	}
});
module.exports = Footer;