var TodoDispatcher = require('../dispatcher/todo_dispatcher');

module.exports = {
	todoItemsFetched: function(items) {
		TodoDispatcher.handleAction({
			type: 'TODO_ITEMS_FETCHED',
			items: items
		});
	},

  createTodo: function(text) {
    TodoDispatcher.handleAction({
      type: 'TODO_ITEM_SUBMITTED',
      name: text
    });
  },

  newTodoCreated: function(new_item) {
    TodoDispatcher.handleAction({
      type: 'NEW_TODO_CREATED',
      name: new_item
    });
  }
}