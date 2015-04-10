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
		_store.items = action.items; // Update _store with new items
		TodoStore.emit(CHANGE_EVENT); // Notify components of changes
	}
);

module.exports = TodoStore;