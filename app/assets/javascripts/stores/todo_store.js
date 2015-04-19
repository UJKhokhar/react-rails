var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var TodoAppDispatcher = require('../dispatcher/todo_dispatcher');
var _store = {};
var CHANGE_EVENT = 'change'

var TodoStore = _.assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
  getItems: function() {
    return _store.items;
  }
});

TodoStore.dispatchToken = TodoAppDispatcher.register(
	function(action){
    if (action.type === 'TODO_ITEMS_FETCHED') {
  		_store.items = action.items; // Update _store with new items
  		TodoStore.emit(CHANGE_EVENT); // Notify components of changes
    }

    if (action.type === 'NEW_TODO_CREATED') {
      // Add new item to store
      _store.items = _store.items.concat(action.name); 
      TodoStore.emit(CHANGE_EVENT);
    }
	}
);

module.exports = TodoStore;