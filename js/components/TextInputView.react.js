var React = require('react');
var TextInputView = React.createClass({
	getInitialState: function(){
		return{
			text_value : this.props.value || ""
		}
	},
	_keydown: function(event){
		var inputText = event.target;
		if(event.keyCode == 13){

			this._onSave(event.target.value);
		}
		
	},
	handleUpdate: function(event){
		var inputText = event.target;
		if($(inputText).hasClass("edit")){
			var id = $(inputText).closest("li").attr("id"); 
			this.props.edit(event.target.value,id);
		}
		
	},
	handleChange: function(event){
		this.setState({text_value:event.target.value});
	},
	_onSave: function(text){
		this.props.onSave(text);
		this.setState({text_value:""});
	},
	handleSave: function(event){
		this._onSave(event.target.value);
	},
	render: function(){
	
		
		return(
			<input 
				type="text" 
				ref="txt" 
				onChange={this.handleChange}
				onBlur={this.handleSave}
				className={this.props.className} 
				value={this.state.text_value} 
				id={this.props.id} 
				placeholder={this.props.placeholder} 
				onKeyUp={this._keydown}/>
		);
	}
});
module.exports = TextInputView;