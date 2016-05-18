var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var TodoAction = {
	create: function(txt){
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_CREATE,
			text: txt

		});
	},
	delItem: function(id){
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_DESTROY,
			id: id

		});
	},
	completeAll: function(){
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL,
		});
	},
	undoCompleteAll: function(){
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_UNDO_COMPLETE,
		});
	},
	deleteAll: function(){
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_DESTROY_COMPLETED,
		});
	},
	update: function(txt,id){
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_Edit_TEXT,
			id: id,
			text: txt
		});
	},
	completeItem: function(id){
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_COMPLETE,
			id: id
			
		});
	}
};	
module.exports = TodoAction;