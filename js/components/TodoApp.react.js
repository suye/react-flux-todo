var React = require('react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var Footer = require('./Footer.react');
var TodoStore = require('../stores/TodoStore');
var TodoApp = React.createClass({
	getInitialState: function(){
		return{
			mytodos:[]
		};
	},
	_onChange: function(){
		var newtodos = TodoStore.getAll();
		this.setState({mytodos:newtodos});
	},
	componentDidMount: function(){
		TodoStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		TodoStore.removeChangeListener(this._onChange);
	},
	render: function(){
		return (
			<div>
				<Header/>
				<MainSection list={this.state.mytodos} />
				<Footer list={this.state.mytodos}></Footer>
			</div>
		);
	}
});
module.exports = TodoApp;