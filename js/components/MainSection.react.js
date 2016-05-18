var React = require('react');
var TodoAction = require('../actions/TodoAction.react');
var TodoItem = require("./TodoItem.react");
var MainSection = React.createClass({
	handleClick: function(){
		if(!$('#todo-list li:eq(0)').hasClass('completed')){
			TodoAction.completeAll();
		}else{
			TodoAction.undoCompleteAll();
		}
	},
	render: function(){
		
		if(Object.keys(this.props.list).length == 0){
			return null;
		}
		var todos = [];

		for(var key in this.props.list){
			todos.push(
				<TodoItem key={this.props.list[key]["id"]} todo={this.props.list[key]}></TodoItem>
			)
		}
		return (
			<section id='main'>
				<input type="checkbox"  id="toggle-all" onClick={this.handleClick}/>
				<ul id='todo-list'>
					{todos}
				</ul>
			
				
				
			</section>
		);
	}
});
module.exports = MainSection;