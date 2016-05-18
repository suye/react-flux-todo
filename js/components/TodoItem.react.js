var React = require("react");
var classNames = require("classnames");
var TodoAction = require('../actions/TodoAction.react');
var TextInputView = require('./TextInputView.react');
var TodoItem = React.createClass({
	getInitialState: function(){
		return{
			isEditing: false
		}
	},
	handleClick: function(event){
		var btn = event.target;
		var id = $(btn).closest("li").attr("id");		
		TodoAction.delItem(id);
	},
	handleToEdit: function(event){
		this.setState({isEditing:true});
	},
	handleUpdate: function(text){
		
		TodoAction.update(text,this.props.todo["id"]);
		this.setState({isEditing:false});
	},
	handleComplete: function(){
		TodoAction.completeItem(this.props.todo["id"]);
	},
	render: function(){
		
		var that = this;
		var todo = this.props.todo;
		var input = "";
		if(this.state.isEditing){
			input = <TextInputView className="edit" value={todo["text"]} onSave={that.handleUpdate}/>
		}
		
		return(
			<li id={todo["id"]} className={classNames({"editing":this.state.isEditing},{"completed":todo["completed"]})}>
					
					<div className='view'>
						<input type="checkbox" name="" id="" className="toggle" onClick={this.handleComplete}checked={todo["completed"] ? "checked" : ""}/>
						<label onClick={this.handleToEdit}>{todo["text"]}</label>
						<button className="destroy" onClick={that.handleClick}></button>
					</div>
					{input}
				
			</li>
		);
	}
}); 
module.exports = TodoItem;