var React = require('react');
var TextInputView = require('./TextInputView.react');
var TodoAction = require('../actions/TodoAction.react');
var Header = React.createClass({
	_save: function(txt){
		TodoAction.create(txt);
	},
	render: function(){
		return(
			<header id='header'>
				<h1>todos</h1>
				<TextInputView id='new-todo'   placeholder='What needs to be done?' onSave={this._save}/>
			</header>
		)
	}
});
module.exports = Header;