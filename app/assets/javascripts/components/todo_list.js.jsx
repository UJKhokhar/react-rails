var TodoItem = require('./todo_item');
var TodoStore = require('../stores/todo_store');

function createTodoItemComponent(item) {
	return <TodoItem data={item} />
}

var TodoList = React.createClass({

	getInitialState: function() {
		return {
			items: []
		}
	},

	componentDidMount: function() {
		TodoStore.addChangeListener(
			this.onChange
		);
	},

	onChange: function() {
		this.setState({
			items: TodoStore.getItems()
		});
	},

	render: function(){
		var items = this.state.items.map(createTodoItemComponent);

		return (
			<ul>
				{items}
			</ul>
		)
	}
});

module.exports = TodoList;