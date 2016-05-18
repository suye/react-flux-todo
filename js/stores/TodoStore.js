var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var todos = {};
function create(txt){
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    todos[id] = {
      id: id,
      text: txt,
      completed:false,
      edit: false
    }
    
}

function delItem(id){
  delete todos[id];
}

function completeAll(){
  var keys = Object.keys(todos);
  $(keys).each(function() {
    todos[this]['completed'] = true;
    console.log(todos[this]);
  });
}
function undoCompleteAll(){
  var keys = Object.keys(todos);
  $(keys).each(function() {
    todos[this]['completed'] = false;
    console.log(todos[this]);
  });
}

function completeItem(id){
  todos[id]['completed'] = true;
}

function deleteAll(){
  todos = {};
}
function updateItem(id,txt){
  todos[id]["edit"] = false;
  todos[id]["text"] = txt;
}
var TodoStore = assign({},EventEmitter.prototype,{
  getAll: function(){
    return todos;
  },
  emitChange: function(){
    this.emit('change');
  },
  addChangeListener: function(callback){
    this.on('change',callback);
  },
  removeChangeListener: function(callback){
     this.removeListener('change', callback);
  }

})
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case TodoConstants.TODO_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
        TodoStore.emitChange();
      }
      break;
    case TodoConstants.TODO_DESTROY:
      id = action.id;
      if(id){
        delItem(id);
        TodoStore.emitChange();
      }
      break;
    case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
      completeAll();
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_UNDO_COMPLETE:
      undoCompleteAll();
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_DESTROY_COMPLETED:
      deleteAll();
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_UPDATE_TEXT:
      editItem(action.id);
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_Edit_TEXT:
      updateItem(action.id,action.text);
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_COMPLETE:
      completeItem(action.id);
      TodoStore.emitChange();
      break;
  

    default:
      // no op
  }
});
module.exports = TodoStore;