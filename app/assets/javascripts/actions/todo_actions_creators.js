var TodoDispatcher = require('../dispatcher/todo_dispatcher')

module.exports = {
	todoItemsFetched: function(items) {
		TodoDispatcher.handleAction({
			type: 'TODO_ITEMS_FETCHED',
			items: items
		});
	}
}